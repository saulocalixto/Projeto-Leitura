import React, { Component } from "react";
import { Label, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderPost = (props) => {
  return (
    <div className="post">
      <div style={{ textAlign: 'left', fontSize: 'small', color: 'gray' }}> Postado em: {props.post.data} </div>
      <div style={{ textAlign: 'left' }}> 100 visualizações </div>
      <div style={{ textAlign: 'left' }}> Categoria: {props.post.category} </div>
      <div style={{ textAlign: 'left' }}> Comentários: <Badge>31</Badge> </div>
      <div style={{ textAlign: 'left' }}><p>Score: <Badge>{props.post.voteScore}</Badge></p></div>
    </div>
  )
}

export default HeaderPost