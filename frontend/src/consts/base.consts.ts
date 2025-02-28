export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_GLOBAL = typeof global !== 'undefined'

export const IS_DEV =
	process.env.NODE_ENV === 'development' ||
	process.env.NEXT_PUBLIC_NODE_ENV === 'development'
