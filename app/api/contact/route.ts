import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const { nome, email, contacto, mensagem } = await request.json();

		// Validate required fields
		if (!nome || !email || !mensagem) {
			return NextResponse.json(
				{ error: 'Nome, email e mensagem são obrigatórios' },
				{ status: 400 },
			);
		}

		const { data, error } = await resend.emails.send({
			from: 'Aldeia Pintada <contact@aldeiapintada.com>',
			to: ['aldeiapintada@gmail.com'],
			subject: `Nova mensagem de contacto: ${nome}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #333;">Nova mensagem de contacto</h2>
					<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p><strong>Nome:</strong> ${nome}</p>
						<p><strong>Email:</strong> ${email}</p>
						<p><strong>Contacto:</strong> ${contacto || 'Não fornecido'}</p>
						<p><strong>Mensagem:</strong></p>
						<p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
							${mensagem.replace(/\n/g, '<br>')}
						</p>
					</div>
					<hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
					<p style="color: #666; font-size: 14px;">
						Esta mensagem foi enviada através do formulário de contacto do website Aldeia Pintada.
					</p>
				</div>
			`,
		});

		if (error) {
			console.error('Resend error:', error);
			return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
		}

		return NextResponse.json(
			{ message: 'Email enviado com sucesso', data },
			{ status: 200 },
		);
	} catch (error) {
		console.error('Server error:', error);
		return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
	}
}
