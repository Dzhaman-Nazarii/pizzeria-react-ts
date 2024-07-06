import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

interface IEditPizzaFormProps {
	data: Pizza,
	updatePizza: (newPizza: Pizza) => void,
	handleToggleEdit: () => void
}


const EditPizzaForm: FC<IEditPizzaFormProps> = ({data, updatePizza, handleToggleEdit}) => {
	const [editPizza, setEditPizza] = useState<Pizza>(data);

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;
		setEditPizza({
			...editPizza,
			[name]: value,
		});
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const {title, price, image} = editPizza;
		if(title && price && image) {
			updatePizza(editPizza);
			handleToggleEdit();
		};
	};

	return (
		<form onSubmit={handleSubmit} className="edit-form">
			<input
				type="text"
				name="title"
				placeholder="Write a pizza name"
				value={editPizza.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="price"
				placeholder="Pizza price"
				value={editPizza.price}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="image"
				placeholder="Pizza image"
				value={editPizza.image}
				onChange={handleChange}
			/>
			<button type="submit">Accept</button>
		</form>
	);
};

export default EditPizzaForm;
