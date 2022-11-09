import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import User_API from '../services/User_API'

const SignupPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const password = watch('password', false)

	const onSubmit = async data => {
		if (data) {
			console.log(data)
			await User_API.register(data)
			// queryClient.invalidateQueries('posts')
		}
	}

	return (
		<div className='flexed-container-two-cols'>
			<div className='left-aligned-img-container'>
				<div className='flexed-h1'>
					<h1 className='vertical-heading'>Sign Up</h1>
				</div>
				<img
					src='../assets/images/loginimg.jpg'
					alt='green paint pattern'
				/>
			</div>
			<div className='right-aligned-container'>
				<h1>Welcome</h1>
				<h2>Let's sign you up quickly</h2>

				<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Enter your name'
						{...register('name')}
						required
					/>
					<input
						type='text'
						placeholder='Enter your email'
						{...register('email')}
						required
					/>
					<input
						name='password'
						type='password'
						placeholder='Enter your password'
						{...register('password', {
							required: 'You must specify a password',
							minLength: {
								value: 6,
								message:
									'Password must have at least 6 characters',
							},
						})}
					/>
					{errors.password && <p>{errors.password.message}</p>}
					<input
						type='password'
						placeholder='Confirm password'
						name='password_confirm'
						{...register('password_confirm', {
							validate: value =>
								value === password ||
								'The passwords do not match',
						})}
					/>
					{errors.password_confirm && (
						<p>{errors.password_confirm.message}</p>
					)}

					<div className='button-container'>
						<button className='button-primary' type='submit'>
							SUBMIT
						</button>
						<div className='form-link'>
							already have an account
							<span className='green'>?</span>
							<div className='green'>
								<a href='/login'>log-in</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignupPage
