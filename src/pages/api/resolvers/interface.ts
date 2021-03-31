import { DB } from '../database/interface';

export type ResolverFn = <T>(parent: unknown, args: unknown, ctx: { db: DB }) => T;
