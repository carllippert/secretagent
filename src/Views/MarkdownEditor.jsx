import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useTauriContext } from "../TauriProvider";
import { readDir, BaseDirectory } from "@tauri-apps/api/fs";
import { join } from "@tauri-apps/api/path";
import {
  APP_NAME,
  notify,
  RUNNING_IN_TAURI,
  useMinWidth,
  useStorage,
} from "../utils";

// Reads the `$APPDATA/users` directory recursively

export default function App() {
  const { fileSep, loading, documents, downloads, appDocuments } =
    useTauriContext();

  const [markdownFiles, setMarkdownFiles] = useState([]);

  // store-plugin will create necessary directories
  // const storeName = `${documents}${APP_NAME}${fileSep}example_view.dat`;
  // // const storeName = 'data.dat';
  // const [data, setData, loadingData] = useStorage("exampleKey", "", storeName);

  const [value, setValue] = React.useState("**Hello world!!!**");

  const getDir = async () => {
    try {
      const entries = await readDir(appDocuments + "/markdown", {
        recursive: true,
      });

      for (const entry of entries) {
        console.log("Entry", entry);

        console.log(`Entry: ${entry.path}`);
        if (entry.children) {
          processEntries(entry.children);
        }
      }
      setMarkdownFiles(entries);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDir();
  }, []);

  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
}
