import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

interface IPizzaFormProps {
	addPizza: (newPizza: Pizza) => void
}

const initialState = {
	title: "",
	price: "",
	image: "",
};

const AddPizzaForm: FC<IPizzaFormProps> = ({addPizza}) => {
	const [newPizza, setNewPizza] = useState<{
		title: string;
		price: string;
		image: string;
	}>(initialState);

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;
		setNewPizza({
			...newPizza,
			[name]: value,
		});
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const {title, price, image} = newPizza;
		if(title && price && image) {
			addPizza({
				id: Date.now(),
				title,
				price: Number(price),
				image
			})
			setNewPizza(initialState);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="title"
				placeholder="Write a pizza name"
				value={newPizza.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="price"
				placeholder="Pizza price"
				value={newPizza.price}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="image"
				placeholder="Pizza image"
				value={newPizza.image}
				onChange={handleChange}
			/>
			<button type="submit">Add to menu</button>
		</form>
	);
};

export default AddPizzaForm;
