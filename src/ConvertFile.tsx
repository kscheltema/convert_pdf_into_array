import React from "react";

interface OwnProps {
  children: any;
}

const ConvertFile: React.FC<OwnProps> = (props) => {
  const [files, setFiles] = React.useState("");
  //   const [files, setFiles] = new Blob([JSON.stringify(obj,null, 2)], type: 'application/json')
  const handleChange = (event: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8"); //check
    fileReader.onload = (e: any) => {
      setFiles(e.target.result);
    };
  };
  return (
    <div>
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {"uploaded file content -- " + files}
    </div>
  );
};

export default ConvertFile;
