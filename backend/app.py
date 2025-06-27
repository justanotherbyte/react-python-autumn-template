from __future__ import annotations

import os
import contextlib
from typing import TYPE_CHECKING

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from autumn.asgi import AutumnASGI

if TYPE_CHECKING:
    from starlette.requests import Request
    from autumn.asgi import AutumnIdentifyData


async def identify(request: Request) -> AutumnIdentifyData:
    # db = request.state.postgres
    # session = request.session

    # This is where you are responsible for identifying the logged-in user.
    # You must return a dictionary in the format shown below.

    return {
        "customer_id": "user_123",
        "customer_data": {"name": "John Doe", "email": "djohn@gmail.com"},
    }


autumn = AutumnASGI(token=os.environ["AUTUMN_KEY"], identify=identify)


@contextlib.asynccontextmanager
async def lifespan(_):
    yield
    await autumn.close()


# CORS must be configured correctly.
# You must allow the GET, POST and OPTIONS methods at a minimum.
# Pass your frontend url here.
ORIGINS = ["http://localhost:5173"]

# Note this example uses FastAPI, but can use Litestar, Starlette, or any other ASGI framework
# that supports mounting ASGI apps.
app = FastAPI(debug=True, lifespan=lifespan)
app.mount("/api/autumn", autumn)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
