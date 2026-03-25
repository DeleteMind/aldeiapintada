'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import { Text } from '@/components/Text';

export default function Contactos() {
	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		contacto: '',
		mensagem: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitMessage('');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitMessage(
					'Mensagem enviada com sucesso! Entraremos em contacto em breve.',
				);
				setFormData({
					nome: '',
					email: '',
					contacto: '',
					mensagem: '',
				});
			} else {
				setSubmitMessage(data.error || 'Erro ao enviar mensagem. Tente novamente.');
			}
		} catch {
			setSubmitMessage(
				'Erro ao enviar mensagem. Verifique a sua ligação à internet e tente novamente.',
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Header />

			<main className='flex flex-col px-6 gap-10 py-20 items-center'>
				<section className='max-w-2xl w-full flex flex-col items-center justify-center gap-12 pb-10 border-b border-neutral-400'>
					<Text size='2xl' className='text-center'>
						Tens dúvidas ou sugestões? Entra em contacto connosco:
					</Text>

					<form onSubmit={handleSubmit} className='w-full space-y-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label
									htmlFor='nome'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Nome *
								</label>
								<input
									type='text'
									id='nome'
									name='nome'
									value={formData.nome}
									onChange={handleInputChange}
									required
									className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ef8471] focus:border-transparent outline-none transition-colors'
									placeholder='Seu nome completo'
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Email *
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									required
									className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ef8471] focus:border-transparent outline-none transition-colors'
									placeholder='seu.email@exemplo.com'
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor='contacto'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								Contacto
							</label>
							<input
								type='tel'
								id='contacto'
								name='contacto'
								value={formData.contacto}
								onChange={handleInputChange}
								className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ef8471] focus:border-transparent outline-none transition-colors'
								placeholder='Número de telefone (opcional)'
							/>
						</div>

						<div>
							<label
								htmlFor='mensagem'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								Mensagem *
							</label>
							<textarea
								id='mensagem'
								name='mensagem'
								value={formData.mensagem}
								onChange={handleInputChange}
								required
								rows={6}
								className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ef8471] focus:border-transparent outline-none transition-colors resize-vertical'
								placeholder='Escreva a sua mensagem aqui...'
							/>
						</div>

						<div className='flex flex-col items-center gap-4'>
							<button
								type='submit'
								disabled={isSubmitting}
								className={`w-full md:w-auto px-8 py-3 flex flex-row items-center justify-center gap-2 cursor-pointer bg-[#ef8471] rounded-md hover:bg-[#ffb5a9] text-neutral-50 transition-[transform,brightness] duration-150 ease-out active:scale-[0.99] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed`}
							>
								{isSubmitting ? 'A enviar...' : 'Enviar mensagem'}
							</button>

							{submitMessage && (
								<div
									className={`text-center p-4 rounded-md ${
										submitMessage.includes('sucesso')
											? 'bg-green-50 text-green-800 border border-green-200'
											: 'bg-red-50 text-red-800 border border-red-200'
									}`}
								>
									{submitMessage}
								</div>
							)}
						</div>
					</form>
				</section>

				<section className='flex flex-col items-start justify-center gap-4'>
					<div className='flex flex-col items-start'>
						<Text size='lg' weight='bold'>
							EMAIL
						</Text>
						<Text size='lg'>aldeiapintada@gmail.com</Text>
					</div>

					<div className='flex flex-col items-start'>
						<Text size='lg' weight='bold'>
							MORADA
						</Text>
						<Text size='lg'>Sede Aldeia Pintada:</Text>
						<Text size='lg'>Estrada de São João, Nº25 C, Escola Primária da Torre</Text>
						<Text size='lg'>2440-210 Reguengo do Fetal</Text>
						<Text size='lg'>Portugal</Text>
					</div>
				</section>
			</main>
		</>
	);
}
