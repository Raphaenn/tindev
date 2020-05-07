import styled from 'styled-components';

export const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 50px 0;
    text-align: center;

    ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
}

ul li {
  display: flex;
  flex-direction: column;
}

ul li img {
  max-width: 100%;
  border-radius: 5px 5px 0 0;
}

ul li footer {
  flex: 1;
  background: var(--card-color);
  border: 1px solid var(--border);
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;
}

ul li footer strong {
  font-size: 16px;
  color: var(--primary-color);
}

ul li footer span {
  font-size: 13px;
  color: var(--third-color);
  margin-top: 5px;
}

ul li footer p {
  font-size: 14px;
  line-height: 20px;
  color: var(--secondary-color);
  margin-top: 5px;
}

ul li .buttons {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

ul li .buttons button {
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  background: var(--card-color);
  cursor: pointer;
}

ul li .buttons button:hover img {
  transform: translateY(-5px);
  transition: all 0.2s;
}

.empty {
  font-size: 32px;
  color: #999;
  font-weight: bold;
  margin-top: 300px;
}

.match-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
}

.match-container .avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #FFF;
  margin: 30px 0;
}

.match-container strong {
  font-size: 32px;
  color: #FFF;
}

.match-container p {
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
}

.match-container button {
  border: 0;
  background: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
}
`;

export const Logo = styled.img`
    max-width: 100%;
    border-radius: 5px 5px 0 0;
`;


