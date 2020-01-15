import React from "react";
import { Ellipsis } from "react-css-spinners";
import { MdEmail, MdLock } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";

import { Button, Link } from "~/components/Common";
import Input from "~/components/Input";
import { Subtitle, Form } from "~/layouts/AuthLayout/styles";
import { AuthActions } from "~/store/ducks/auth";
import { colors } from "~/styles/constants";

export default function Login() {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const schema = Yup.object().shape({
		email: Yup.string()
			.email("Informe um email válido")
			.required("Você precisa informar seu email"),
		password: Yup.string().required("Você precisa informar sua senha")
	});

	async function handleSubmit(data, { resetForm }) {
		dispatch(AuthActions.loginRequest(data));
		resetForm();
	}

	return (
		<>
			<Form schema={schema} onSubmit={handleSubmit}>
				{auth.isLoading ? (
					<Ellipsis color={colors.primary} />
				) : (
					<Subtitle>Faça login!</Subtitle>
				)}
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
					Entrar
				</Button>
			</Form>
			<Link align="center" to="/register">
				Quero criar minha conta!
			</Link>
		</>
	);
}
