import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const PostImage = () => {
  const response = useSelector((state) => state.postPokemon);
  const [file, setFile] = useState(null);
  let history = useHistory();

  const handleFile = (e) => {
    console.log(response.id);
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("img", file);
    formData.append("name", "img");
     axios({
      url: `http://localhost:3001/upload/${response.id}`,
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "image/jpeg",
      },
      data: formData,
    })
      .then((res) => res.json())
      .then((response) => console.log(response));
    history.push(`/home/create/exito`);
  };

  return (
    <div>
      <p>Agrega una imagen</p>
      <form onSubmit={(e) => handleUpload(e)}>
        <label>Selecciona un archivo</label>
        <input type="file" name="img" onChange={(e) => handleFile(e)} />
        <button type="submit">Cargar</button>
      </form>
    </div>
  );
};

export default PostImage;
