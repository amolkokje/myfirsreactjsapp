import asyncio
import websockets

# https://websockets.readthedocs.io/en/stable/intro.html

async def hello(websocket, path):
    received_msg = await websocket.recv()
    print("Data received from client: [{}]".format(received_msg))

    greeting = "PONG: [{}]".format(received_msg)

    await websocket.send(greeting)
    print("Sending response: [{}]".format(greeting))

start_server = websockets.serve(hello, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
