import { FC, useState } from "react";
import { Pizza } from "../models/Pizza";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import EditPizzaForm from "./EditPizzaForm";

interface ISinglePizzaProps {
	pizza: Pizza,
	updatePizza: (newPizza: Pizza) => void,
	deletePizza: (id: number) => void
}

const SinglePizza:FC<ISinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
	const [edit, setEdit] = useState<boolean>(false);

	const handleToggleEdit = () => {
		setEdit(!edit)
	};

	const handleDelete = () => {
		deletePizza(pizza.id)
	}

	return (
		<div className="pizza">
			<img src={`/images/${pizza.image}`} alt={pizza.title} />
			<h2>{pizza.title}</h2>
			<span>{pizza.price} ₴</span>
			<div className="pizza-controlls">
				<AiFillEdit onClick={handleToggleEdit}/>
				<AiFillDelete onClick={handleDelete}/>
			</div>
			{edit ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit}/> : null}
		</div>
	)
}

export default SinglePizza