import { getFilesAPI, getFilesByQueryAPI } from "../api/file";
import { useDispatch } from "react-redux";
import { setFiles, setLoading, setError } from "../store/store";

const useFile = () => {
  const dispatch = useDispatch();
  const getFiles = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getFilesAPI();
      const { files } = response;
      const filesData = files.flatMap((file) =>
        file.lines.map((line) => ({ ...line, file: file.file }))
      );
      dispatch(setFiles(filesData), setLoading(false));
    } catch (error) {
      dispatch(setLoading(false), setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getFile = async (query) => {
    try {
      dispatch(setLoading(true));
      const response = await getFilesByQueryAPI(query);
      const { file } = response;
      const fileData = [];
      if (file.lines.length > 0) {
        for (const line of file.lines) {
          line.file = file.file;
          fileData.push(line);
        }
      }
      dispatch(setFiles(fileData), setLoading(false));
    } catch (error) {
      dispatch(setLoading(false), setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    getFiles,
    getFile,
  };
};

export default useFile;
