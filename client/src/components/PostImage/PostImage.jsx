import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postImg } from "../../Redux/actions";

const PostImage = () => {
  const response = useSelector((state) => state.postPokemon);
  const [file, setFile] = useState(null);
  let history = useHistory();
  const dispatch = useDispatch()


  const handleFile = (e) => {
    console.log(response.id);
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("img", file);
    formData.append("name", "img");
    dispatch(postImg(formData, response))
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
