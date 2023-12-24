import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const BASE_URL = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:8082'

export const PAGE_SIZE = 20