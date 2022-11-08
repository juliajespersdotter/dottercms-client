import React from 'react'
import { useForm } from 'react-hook-form'
import '../assets/scss/signup-login.scss'

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<div className='flexed-container-two-cols'>
			<div className='left-aligned-img-container'>
				<div className='flexed-h1'>
					<h1 className='vertical-heading'>Login</h1>
				</div>
				<img
					src='../assets/images/loginimg.jpg'
					alt='green paint pattern'
				/>
			</div>
			<div className='right-aligned-container'>
				<h1>Welcome</h1>
				<h2>Let's log you in quickly</h2>

				<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Enter your email'
						{...register('email')}
						required
					/>
					<input
						type='text'
						placeholder='Enter your password'
						{...register('password')}
						required
					/>

					<div className='d-flex justify-content-between align-items-center'>
						<button className='button-primary' type='submit'>
							LOGIN
						</button>
						<div className='d-flex align-items-center flex-wrap'>
							don't have an account
							<span className='green'>?</span>
							<div className='w-50 green'>
								<a href='/signup'>sign up</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginPage
