import socket
import sys
import traceback
from threading import Thread


def start_server():
    host = "127.0.0.1"  #loaclhost
    port = 8888         # porta qlq não separada por padrão.

    # Criando um socket "cru" (precisa 'conectar')
    soc = socket.socket(socket.AF_INET, socket.SOCK_STREAM)     # IPv4 | TCP/IP        
    soc.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)   # SO_REUSEADDR -"Kernel, pfv pega logo um socket local em espera (TIME_WAIT)"
    print("INICIANDO conexão Socket...")

    try:        
        soc.bind((host, port))  # bind ("ligar/conectar") 
        print("Socket CONECTADO!")
    except:
        print("Bind failed. Error : " + str(sys.exc_info()))
        sys.exit()

    soc.listen(5)       # queue up to 5 requests    // limite da FILA
    print(f"Socket OUVINDO em {host}:{port}")

    # infinite loop- do not reset for every requests
    while True:
        connection, address = soc.accept()
        ip, port = str(address[0]), str(address[1])
        print("Connected with " + ip + ":" + port)

        try:
            # Joga a conexão em uma Thread separada.
            Thread(target=client_thread, args=(connection, ip, port)).start()   # 1 thread per conection
        except:
            print("Thread did not start.")
            traceback.print_exc()

    soc.close()


def client_thread(connection, ip, port, max_buffer_size=5120):      # [max_buffer_size] tamanho max alocado pra msg recebida.
    is_active = True

    while is_active:
        client_input = receive_input(connection, max_buffer_size)

        if "--QUIT--" in client_input:
            print("Client is requesting to quit")
            connection.close()
            print("Connection " + ip + ":" + port + " closed")
            is_active = False
        else:
            print("Processed result: {}".format(client_input))
            connection.sendall("-".encode("utf8"))


def receive_input(connection, max_buffer_size):
    client_input = connection.recv(max_buffer_size)
    client_input_size = sys.getsizeof(client_input)

    if client_input_size > max_buffer_size:
        print("The input size is greater than expected {}".format(client_input_size))

    decoded_input = client_input.decode(
        "utf8").rstrip()  # decode and strip end of line
    result = process_input(decoded_input)

    return result


def process_input(input_str):
    print("Processing the input received from client")

    return "Hello " + str(input_str).upper()


start_server()
