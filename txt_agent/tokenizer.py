import tiktoken

# Tokeniser

base = "cl100k_base"

def encoder(text):
    enc = tiktoken.get_encoding(base)
    return enc.encode(text)

def decoder(text):
    enc = tiktoken.get_encoding(base)
    return enc.decode(text)

def main():
    text = "I love you bani"
    print("Original text:", text)
    encoded = encoder(text)
    print("Encoded text:", encoded)
    decoded = decoder(encoded)
    print("Decoded text:", decoded)

if __name__ == "__main__":
    main()
