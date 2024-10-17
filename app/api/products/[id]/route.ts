import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const productId = params.id;

  const product = await db.product.delete({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return Response.json(
      { message: "Product not found." },
      {
        status: 404,
      },
    );
  }

  return Response.json({
    status: 200,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("teste");

  console.log({ query });

  if (query) {
    return NextResponse.json(
      { message: `Query parameter received: ${query}` },
      { status: 200 },
    );
  }

  const productId = params.id;

  if (productId) {
    // Se o ID do produto for passado, executa a lógica de buscar o produto
    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found." },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(product, {
      status: 200,
    });
  }
}
