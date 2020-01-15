import React from "react";
import { Ellipsis } from "react-css-spinners";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";

import { Button, Link } from "~/components/Common";
import Input from "~/components/Input";
import { Subtitle, Form } from "~/layouts/AuthLayout/styles";
import { AuthActions } from "~/store/ducks/auth";
import { colors } from "~/styles/constants";

export default function Register() {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const schema = Yup.object().shape({
		name: Yup.string()
			.min(3, "O nome deve conter no minimo 3 letras")
			.required("Você precisa informar seu nome"),
		email: Yup.string()
			.email("Informe um email válido")
			.required("Você precisa informar seu email"),
		password: Yup.string()
			.min(6, "Senha muito curta. minimo 6 caracteres")
			.required("Você precisa informar sua senha")
	});

	async function handleSubmit(data, { resetForm }) {
		dispatch(AuthActions.registerRequest(data));
		resetForm();
	}

	return (
		<>
			<Form schema={schema} onSubmit={handleSubmit}>
				{auth.isLoading ? (
					<Ellipsis color={colors.primary} />
				) : (
					<Subtitle>Crie sua conta agora!</Subtitle>
				)}
				<Input
					name="name"
					type="text"
					placeholder="Nome"
					icon={selected => (
						<MdPerson color={selected ? colors.primary : colors.gray} />
					)}
				/>
				<Input
					name="email"
					type="email"
					placeholder="E-mail"
					icon={selected => (
						<MdEmail color={selected ? colors.primary : colors.gray} />
					)}
				/>
				<Input
					name="password"
					type="password"
					placeholder="Senha"
					icon={selected => (
						<MdLock color={selected ? colors.primary : colors.gray} />
					)}
				/>
				<Button full mt="15" type="submit" disabled={false}>
					Criar
				</Button>
			</Form>
			<Link align="center" to="/login">
				Fazer login
			</Link>
		</>
	);
}
