import React from "react";
import styled from "styled-components";
import ButtonIcon from './ButtonIcon';

const CardBox = styled.div`
  margin-bottom: 2rem;
`;

const CardHeader = styled.div`
  padding: 5px 10px;
`;
const CardFooter = styled.div`
  width: 100%;
`;
const CardFooterInput = styled.input`
  border: none;
  border-radius: 0;
  box-shadow: none;
`;

const Card = ({ image, caption }) => {
  return (
    <CardBox className="card">
      <CardHeader className="header">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="/img/profile.jpg" alt="Profile" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Giselle Trithip</p>
            <p className="subtitle is-6">@giselletrithip</p>
          </div>
        </div>
      </CardHeader>
      <div className="card-image">
        <figure className="image ">
          <img src={image} alt="posted card" />
        </figure>
      </div>
      <div className="card-content">
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <ButtonIcon>
                <i className="material-icons">favorite_border</i>
              </ButtonIcon>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <ButtonIcon>
                  <i className="material-icons">chat_bubble_outline</i>
                </ButtonIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <p>
            <strong>32 Likes</strong>
          </p>
          {caption}
          <a href="/">@bulmaio</a>.<a href="/">#css</a>
          <a href="/">#responsive</a>
          <br />
          <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
        </div>
      </div>
      <CardFooter>
        <div className="columns is-mobile">
          <div className="column is-10">
            <div className="field">
              <div className="control">
                <CardFooterInput
                  className="input is-medium"
                  type="text"
                  placeholder="Add a comment . . ."
                />
              </div>
            </div>
          </div>
          <div className="column">
            <ButtonIcon className="button">
              <i className="material-icons">more_horiz</i>
            </ButtonIcon>
          </div>
        </div>
      </CardFooter>
    </CardBox>
  );
};

export default Card;
