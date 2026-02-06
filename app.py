from flask import Flask, render_template, request, send_file
from docx import Document
from fpdf import FPDF
import yagmail
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/formulario")
def formulario():
    return render_template("formulario.html")

@app.route("/generar", methods=["POST"])
def generar():
    nombre = request.form["nombre"]
    curp = request.form["curp"]
    domicilio = request.form["domicilio"]
    hechos = request.form["hechos"]
    fecha = request.form["fecha"]
    firma = request.form["firma"]

    # Crear Word desde machote
    doc = Document("AMPTelecom.docx")
    for p in doc.paragraphs:
        if "(NOMBRE_QUEJOSO)" in p.text:
            p.text = p.text.replace("(NOMBRE_QUEJOSO)", nombre)
        if "(CURP_1)" in p.text:
            p.text = p.text.replace("(CURP_1)", curp)
        if "(LUGAR_1)" in p.text:
            p.text = p.text.replace("(LUGAR_1)", "Ciudad de México")
        if "[Fecha exacta en que tuvo conocimiento del acto reclamado]" in p.text:
            p.text = p.text.replace("[Fecha exacta en que tuvo conocimiento del acto reclamado]", fecha)
        if "[Narración" in p.text:
            p.text = hechos
    word_file = "amparo_generado.docx"
    doc.save(word_file)

    # Crear PDF
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.multi_cell(0, 10, txt=f"Nombre: {nombre}")
    pdf.multi_cell(0, 10, txt=f"CURP: {curp}")
    pdf.multi_cell(0, 10, txt=f"Domicilio: {domicilio}")
    pdf.multi_cell(0, 10, txt=f"Fecha del acto reclamado: {fecha}")
    pdf.multi_cell(0, 10, txt="Hechos:")
    pdf.multi_cell(0, 10, txt=hechos)
    pdf.multi_cell(0, 10, txt=f"Firma: {firma}")
    pdf_file = "amparo_generado.pdf"
    pdf.output(pdf_file)

    # Enviar correo (opcional)
    try:
        yag = yagmail.SMTP("rubiselaf15@gmail.com", "TU_CONTRASEÑA_APP")
        yag.send(
            to="ejemplo@email.com",  # cambia esto si usas campo de email
            subject="Tu amparo está listo",
            contents="""Gracias por generar tu amparo.\n\nDatos para donativo:\nBANCO GENERAL\nCuenta: 1234567890\nCLABE: 012345678901234567\nNombre: Iniciativa Ciudadana por la Privacidad.""",
            attachments=[pdf_file]
        )
    except Exception as e:
        print("No se pudo enviar correo:", e)

    return render_template("final.html")

@app.route("/descargar")
def descargar():
    return send_file("amparo_generado.pdf", as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
