from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    # Configuración de tu cuenta de correo
    sender_email = "barcklan.inforadd@gmail.com"
    sender_password = "Varcklan1992"  # Usa clave de aplicación si es Gmail
    receiver_email = "barcklan.inforadd@gmail.com"  # Donde recibirás los mensajes

    # Crear el contenido del correo
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"Nuevo mensaje de: {name} - {subject}"
    
    body = f"""
    Nombre: {name}
    Teléfono: {phone}
    Correo: {email}
    
    Mensaje:
    {message}
    """
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Conectar al servidor SMTP y enviar el correo
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
        server.quit()
        return jsonify({'message': 'Mensaje enviado con éxito'}), 200
    except Exception as e:
        print(e)
        return jsonify({'message': 'Error al enviar el mensaje'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
