import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza : React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    async function fetchPizza() {
      try {
      const { data } = await axios.get('https://62f5f074612c13062b430099.mockapi.io/pizza/' + id);
      setPizza(data);
      } catch(error) {
        alert('Пицца не грузится. Нажми "ОК" чтоб перейти на главную');
        navigate('/');
      }
    }

    fetchPizza();
  }, [])

  if (!pizza) {
    return (<h2>'Загрузка...'</h2>)
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{ pizza.title }</h2>
      <h4>{ pizza.price }</h4>
    </div>
  );
};

export default FullPizza;