from PyPDF2 import PdfReader
import sys

def pdf_to_txt(file, start_pg, end_pg):
    reader = PdfReader(file)
    text = ""
    for i in range(int(start_pg), int(end_pg)):
        print("Page: " + str(i))
        text += reader.pages[i].extract_text()


if __name__ == "__main__":
    pdf_to_txt(sys.argv[1], sys.argv[2], sys.argv[3])
