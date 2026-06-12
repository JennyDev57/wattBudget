
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model User_sessions
 * 
 */
export type User_sessions = $Result.DefaultSelection<Prisma.$User_sessionsPayload>
/**
 * Model User_account
 * 
 */
export type User_account = $Result.DefaultSelection<Prisma.$User_accountPayload>
/**
 * Model User_verification
 * 
 */
export type User_verification = $Result.DefaultSelection<Prisma.$User_verificationPayload>
/**
 * Model Recharge
 * 
 */
export type Recharge = $Result.DefaultSelection<Prisma.$RechargePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_sessions`: Exposes CRUD operations for the **User_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_sessions
    * const user_sessions = await prisma.user_sessions.findMany()
    * ```
    */
  get user_sessions(): Prisma.User_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_account`: Exposes CRUD operations for the **User_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_accounts
    * const user_accounts = await prisma.user_account.findMany()
    * ```
    */
  get user_account(): Prisma.User_accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_verification`: Exposes CRUD operations for the **User_verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_verifications
    * const user_verifications = await prisma.user_verification.findMany()
    * ```
    */
  get user_verification(): Prisma.User_verificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recharge`: Exposes CRUD operations for the **Recharge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recharges
    * const recharges = await prisma.recharge.findMany()
    * ```
    */
  get recharge(): Prisma.RechargeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    User_sessions: 'User_sessions',
    User_account: 'User_account',
    User_verification: 'User_verification',
    Recharge: 'Recharge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "user_sessions" | "user_account" | "user_verification" | "recharge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      User_sessions: {
        payload: Prisma.$User_sessionsPayload<ExtArgs>
        fields: Prisma.User_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>
          }
          findFirst: {
            args: Prisma.User_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>
          }
          findMany: {
            args: Prisma.User_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>[]
          }
          create: {
            args: Prisma.User_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>
          }
          createMany: {
            args: Prisma.User_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>[]
          }
          delete: {
            args: Prisma.User_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>
          }
          update: {
            args: Prisma.User_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.User_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>[]
          }
          upsert: {
            args: Prisma.User_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionsPayload>
          }
          aggregate: {
            args: Prisma.User_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_sessions>
          }
          groupBy: {
            args: Prisma.User_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsCountAggregateOutputType> | number
          }
        }
      }
      User_account: {
        payload: Prisma.$User_accountPayload<ExtArgs>
        fields: Prisma.User_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>
          }
          findFirst: {
            args: Prisma.User_accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>
          }
          findMany: {
            args: Prisma.User_accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>[]
          }
          create: {
            args: Prisma.User_accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>
          }
          createMany: {
            args: Prisma.User_accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>[]
          }
          delete: {
            args: Prisma.User_accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>
          }
          update: {
            args: Prisma.User_accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>
          }
          deleteMany: {
            args: Prisma.User_accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>[]
          }
          upsert: {
            args: Prisma.User_accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_accountPayload>
          }
          aggregate: {
            args: Prisma.User_accountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_account>
          }
          groupBy: {
            args: Prisma.User_accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_accountCountArgs<ExtArgs>
            result: $Utils.Optional<User_accountCountAggregateOutputType> | number
          }
        }
      }
      User_verification: {
        payload: Prisma.$User_verificationPayload<ExtArgs>
        fields: Prisma.User_verificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_verificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_verificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>
          }
          findFirst: {
            args: Prisma.User_verificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_verificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>
          }
          findMany: {
            args: Prisma.User_verificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>[]
          }
          create: {
            args: Prisma.User_verificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>
          }
          createMany: {
            args: Prisma.User_verificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_verificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>[]
          }
          delete: {
            args: Prisma.User_verificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>
          }
          update: {
            args: Prisma.User_verificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>
          }
          deleteMany: {
            args: Prisma.User_verificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_verificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_verificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>[]
          }
          upsert: {
            args: Prisma.User_verificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_verificationPayload>
          }
          aggregate: {
            args: Prisma.User_verificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_verification>
          }
          groupBy: {
            args: Prisma.User_verificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_verificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_verificationCountArgs<ExtArgs>
            result: $Utils.Optional<User_verificationCountAggregateOutputType> | number
          }
        }
      }
      Recharge: {
        payload: Prisma.$RechargePayload<ExtArgs>
        fields: Prisma.RechargeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RechargeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RechargeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>
          }
          findFirst: {
            args: Prisma.RechargeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RechargeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>
          }
          findMany: {
            args: Prisma.RechargeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>[]
          }
          create: {
            args: Prisma.RechargeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>
          }
          createMany: {
            args: Prisma.RechargeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RechargeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>[]
          }
          delete: {
            args: Prisma.RechargeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>
          }
          update: {
            args: Prisma.RechargeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>
          }
          deleteMany: {
            args: Prisma.RechargeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RechargeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RechargeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>[]
          }
          upsert: {
            args: Prisma.RechargeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargePayload>
          }
          aggregate: {
            args: Prisma.RechargeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecharge>
          }
          groupBy: {
            args: Prisma.RechargeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RechargeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RechargeCountArgs<ExtArgs>
            result: $Utils.Optional<RechargeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    user_sessions?: User_sessionsOmit
    user_account?: User_accountOmit
    user_verification?: User_verificationOmit
    recharge?: RechargeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_sessionss: number
    user_accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_sessionss?: boolean | UserCountOutputTypeCountUser_sessionssArgs
    user_accounts?: boolean | UserCountOutputTypeCountUser_accountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_sessionssArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_sessionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_accountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_sessionss?: boolean | User$user_sessionssArgs<ExtArgs>
    user_accounts?: boolean | User$user_accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_sessionss?: boolean | User$user_sessionssArgs<ExtArgs>
    user_accounts?: boolean | User$user_accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      user_sessionss: Prisma.$User_sessionsPayload<ExtArgs>[]
      user_accounts: Prisma.$User_accountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_sessionss<T extends User$user_sessionssArgs<ExtArgs> = {}>(args?: Subset<T, User$user_sessionssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_accounts<T extends User$user_accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$user_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.user_sessionss
   */
  export type User$user_sessionssArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    where?: User_sessionsWhereInput
    orderBy?: User_sessionsOrderByWithRelationInput | User_sessionsOrderByWithRelationInput[]
    cursor?: User_sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * User.user_accounts
   */
  export type User$user_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    where?: User_accountWhereInput
    orderBy?: User_accountOrderByWithRelationInput | User_accountOrderByWithRelationInput[]
    cursor?: User_accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model User_sessions
   */

  export type AggregateUser_sessions = {
    _count: User_sessionsCountAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  export type User_sessionsMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type User_sessionsMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type User_sessionsCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type User_sessionsMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type User_sessionsMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type User_sessionsCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type User_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_sessions to aggregate.
     */
    where?: User_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionsOrderByWithRelationInput | User_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_sessions
    **/
    _count?: true | User_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_sessionsMaxAggregateInputType
  }

  export type GetUser_sessionsAggregateType<T extends User_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_sessions[P]>
      : GetScalarType<T[P], AggregateUser_sessions[P]>
  }




  export type User_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_sessionsWhereInput
    orderBy?: User_sessionsOrderByWithAggregationInput | User_sessionsOrderByWithAggregationInput[]
    by: User_sessionsScalarFieldEnum[] | User_sessionsScalarFieldEnum
    having?: User_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_sessionsCountAggregateInputType | true
    _min?: User_sessionsMinAggregateInputType
    _max?: User_sessionsMaxAggregateInputType
  }

  export type User_sessionsGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: User_sessionsCountAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  type GetUser_sessionsGroupByPayload<T extends User_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type User_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_sessions"]>

  export type User_sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_sessions"]>

  export type User_sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_sessions"]>

  export type User_sessionsSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type User_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["user_sessions"]>
  export type User_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type User_sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type User_sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $User_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_sessions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["user_sessions"]>
    composites: {}
  }

  type User_sessionsGetPayload<S extends boolean | null | undefined | User_sessionsDefaultArgs> = $Result.GetResult<Prisma.$User_sessionsPayload, S>

  type User_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_sessionsCountAggregateInputType | true
    }

  export interface User_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_sessions'], meta: { name: 'User_sessions' } }
    /**
     * Find zero or one User_sessions that matches the filter.
     * @param {User_sessionsFindUniqueArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_sessionsFindUniqueArgs>(args: SelectSubset<T, User_sessionsFindUniqueArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_sessionsFindUniqueOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, User_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsFindFirstArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_sessionsFindFirstArgs>(args?: SelectSubset<T, User_sessionsFindFirstArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsFindFirstOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, User_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_sessions
     * const user_sessions = await prisma.user_sessions.findMany()
     * 
     * // Get first 10 User_sessions
     * const user_sessions = await prisma.user_sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_sessionsWithIdOnly = await prisma.user_sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_sessionsFindManyArgs>(args?: SelectSubset<T, User_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_sessions.
     * @param {User_sessionsCreateArgs} args - Arguments to create a User_sessions.
     * @example
     * // Create one User_sessions
     * const User_sessions = await prisma.user_sessions.create({
     *   data: {
     *     // ... data to create a User_sessions
     *   }
     * })
     * 
     */
    create<T extends User_sessionsCreateArgs>(args: SelectSubset<T, User_sessionsCreateArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_sessions.
     * @param {User_sessionsCreateManyArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_sessions = await prisma.user_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_sessionsCreateManyArgs>(args?: SelectSubset<T, User_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_sessions and returns the data saved in the database.
     * @param {User_sessionsCreateManyAndReturnArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_sessions = await prisma.user_sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_sessions and only return the `id`
     * const user_sessionsWithIdOnly = await prisma.user_sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, User_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_sessions.
     * @param {User_sessionsDeleteArgs} args - Arguments to delete one User_sessions.
     * @example
     * // Delete one User_sessions
     * const User_sessions = await prisma.user_sessions.delete({
     *   where: {
     *     // ... filter to delete one User_sessions
     *   }
     * })
     * 
     */
    delete<T extends User_sessionsDeleteArgs>(args: SelectSubset<T, User_sessionsDeleteArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_sessions.
     * @param {User_sessionsUpdateArgs} args - Arguments to update one User_sessions.
     * @example
     * // Update one User_sessions
     * const user_sessions = await prisma.user_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_sessionsUpdateArgs>(args: SelectSubset<T, User_sessionsUpdateArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_sessions.
     * @param {User_sessionsDeleteManyArgs} args - Arguments to filter User_sessions to delete.
     * @example
     * // Delete a few User_sessions
     * const { count } = await prisma.user_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_sessionsDeleteManyArgs>(args?: SelectSubset<T, User_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_sessions
     * const user_sessions = await prisma.user_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_sessionsUpdateManyArgs>(args: SelectSubset<T, User_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions and returns the data updated in the database.
     * @param {User_sessionsUpdateManyAndReturnArgs} args - Arguments to update many User_sessions.
     * @example
     * // Update many User_sessions
     * const user_sessions = await prisma.user_sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_sessions and only return the `id`
     * const user_sessionsWithIdOnly = await prisma.user_sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, User_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_sessions.
     * @param {User_sessionsUpsertArgs} args - Arguments to update or create a User_sessions.
     * @example
     * // Update or create a User_sessions
     * const user_sessions = await prisma.user_sessions.upsert({
     *   create: {
     *     // ... data to create a User_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_sessions we want to update
     *   }
     * })
     */
    upsert<T extends User_sessionsUpsertArgs>(args: SelectSubset<T, User_sessionsUpsertArgs<ExtArgs>>): Prisma__User_sessionsClient<$Result.GetResult<Prisma.$User_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsCountArgs} args - Arguments to filter User_sessions to count.
     * @example
     * // Count the number of User_sessions
     * const count = await prisma.user_sessions.count({
     *   where: {
     *     // ... the filter for the User_sessions we want to count
     *   }
     * })
    **/
    count<T extends User_sessionsCountArgs>(
      args?: Subset<T, User_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_sessionsAggregateArgs>(args: Subset<T, User_sessionsAggregateArgs>): Prisma.PrismaPromise<GetUser_sessionsAggregateType<T>>

    /**
     * Group by User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: User_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_sessions model
   */
  readonly fields: User_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_sessions model
   */
  interface User_sessionsFieldRefs {
    readonly id: FieldRef<"User_sessions", 'String'>
    readonly expiresAt: FieldRef<"User_sessions", 'DateTime'>
    readonly token: FieldRef<"User_sessions", 'String'>
    readonly createdAt: FieldRef<"User_sessions", 'DateTime'>
    readonly updatedAt: FieldRef<"User_sessions", 'DateTime'>
    readonly ipAddress: FieldRef<"User_sessions", 'String'>
    readonly userAgent: FieldRef<"User_sessions", 'String'>
    readonly userId: FieldRef<"User_sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User_sessions findUnique
   */
  export type User_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_sessions to fetch.
     */
    where: User_sessionsWhereUniqueInput
  }

  /**
   * User_sessions findUniqueOrThrow
   */
  export type User_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_sessions to fetch.
     */
    where: User_sessionsWhereUniqueInput
  }

  /**
   * User_sessions findFirst
   */
  export type User_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_sessions to fetch.
     */
    where?: User_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionsOrderByWithRelationInput | User_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_sessions.
     */
    cursor?: User_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * User_sessions findFirstOrThrow
   */
  export type User_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_sessions to fetch.
     */
    where?: User_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionsOrderByWithRelationInput | User_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_sessions.
     */
    cursor?: User_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * User_sessions findMany
   */
  export type User_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_sessions to fetch.
     */
    where?: User_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionsOrderByWithRelationInput | User_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_sessions.
     */
    cursor?: User_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * User_sessions create
   */
  export type User_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a User_sessions.
     */
    data: XOR<User_sessionsCreateInput, User_sessionsUncheckedCreateInput>
  }

  /**
   * User_sessions createMany
   */
  export type User_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_sessions.
     */
    data: User_sessionsCreateManyInput | User_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_sessions createManyAndReturn
   */
  export type User_sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many User_sessions.
     */
    data: User_sessionsCreateManyInput | User_sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_sessions update
   */
  export type User_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a User_sessions.
     */
    data: XOR<User_sessionsUpdateInput, User_sessionsUncheckedUpdateInput>
    /**
     * Choose, which User_sessions to update.
     */
    where: User_sessionsWhereUniqueInput
  }

  /**
   * User_sessions updateMany
   */
  export type User_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_sessions.
     */
    data: XOR<User_sessionsUpdateManyMutationInput, User_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which User_sessions to update
     */
    where?: User_sessionsWhereInput
    /**
     * Limit how many User_sessions to update.
     */
    limit?: number
  }

  /**
   * User_sessions updateManyAndReturn
   */
  export type User_sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * The data used to update User_sessions.
     */
    data: XOR<User_sessionsUpdateManyMutationInput, User_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which User_sessions to update
     */
    where?: User_sessionsWhereInput
    /**
     * Limit how many User_sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_sessions upsert
   */
  export type User_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the User_sessions to update in case it exists.
     */
    where: User_sessionsWhereUniqueInput
    /**
     * In case the User_sessions found by the `where` argument doesn't exist, create a new User_sessions with this data.
     */
    create: XOR<User_sessionsCreateInput, User_sessionsUncheckedCreateInput>
    /**
     * In case the User_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_sessionsUpdateInput, User_sessionsUncheckedUpdateInput>
  }

  /**
   * User_sessions delete
   */
  export type User_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
    /**
     * Filter which User_sessions to delete.
     */
    where: User_sessionsWhereUniqueInput
  }

  /**
   * User_sessions deleteMany
   */
  export type User_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_sessions to delete
     */
    where?: User_sessionsWhereInput
    /**
     * Limit how many User_sessions to delete.
     */
    limit?: number
  }

  /**
   * User_sessions without action
   */
  export type User_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sessions
     */
    select?: User_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_sessions
     */
    omit?: User_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_sessionsInclude<ExtArgs> | null
  }


  /**
   * Model User_account
   */

  export type AggregateUser_account = {
    _count: User_accountCountAggregateOutputType | null
    _min: User_accountMinAggregateOutputType | null
    _max: User_accountMaxAggregateOutputType | null
  }

  export type User_accountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_accountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_accountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type User_accountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_accountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_accountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type User_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_account to aggregate.
     */
    where?: User_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_accounts to fetch.
     */
    orderBy?: User_accountOrderByWithRelationInput | User_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_accounts
    **/
    _count?: true | User_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_accountMaxAggregateInputType
  }

  export type GetUser_accountAggregateType<T extends User_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_account[P]>
      : GetScalarType<T[P], AggregateUser_account[P]>
  }




  export type User_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_accountWhereInput
    orderBy?: User_accountOrderByWithAggregationInput | User_accountOrderByWithAggregationInput[]
    by: User_accountScalarFieldEnum[] | User_accountScalarFieldEnum
    having?: User_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_accountCountAggregateInputType | true
    _min?: User_accountMinAggregateInputType
    _max?: User_accountMaxAggregateInputType
  }

  export type User_accountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: User_accountCountAggregateOutputType | null
    _min: User_accountMinAggregateOutputType | null
    _max: User_accountMaxAggregateOutputType | null
  }

  type GetUser_accountGroupByPayload<T extends User_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_accountGroupByOutputType[P]>
            : GetScalarType<T[P], User_accountGroupByOutputType[P]>
        }
      >
    >


  export type User_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account"]>

  export type User_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account"]>

  export type User_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account"]>

  export type User_accountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type User_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user_account"]>
  export type User_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type User_accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type User_accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $User_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user_account"]>
    composites: {}
  }

  type User_accountGetPayload<S extends boolean | null | undefined | User_accountDefaultArgs> = $Result.GetResult<Prisma.$User_accountPayload, S>

  type User_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_accountCountAggregateInputType | true
    }

  export interface User_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_account'], meta: { name: 'User_account' } }
    /**
     * Find zero or one User_account that matches the filter.
     * @param {User_accountFindUniqueArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_accountFindUniqueArgs>(args: SelectSubset<T, User_accountFindUniqueArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_accountFindUniqueOrThrowArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_accountFindUniqueOrThrowArgs>(args: SelectSubset<T, User_accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountFindFirstArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_accountFindFirstArgs>(args?: SelectSubset<T, User_accountFindFirstArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountFindFirstOrThrowArgs} args - Arguments to find a User_account
     * @example
     * // Get one User_account
     * const user_account = await prisma.user_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_accountFindFirstOrThrowArgs>(args?: SelectSubset<T, User_accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_accounts
     * const user_accounts = await prisma.user_account.findMany()
     * 
     * // Get first 10 User_accounts
     * const user_accounts = await prisma.user_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_accountWithIdOnly = await prisma.user_account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_accountFindManyArgs>(args?: SelectSubset<T, User_accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_account.
     * @param {User_accountCreateArgs} args - Arguments to create a User_account.
     * @example
     * // Create one User_account
     * const User_account = await prisma.user_account.create({
     *   data: {
     *     // ... data to create a User_account
     *   }
     * })
     * 
     */
    create<T extends User_accountCreateArgs>(args: SelectSubset<T, User_accountCreateArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_accounts.
     * @param {User_accountCreateManyArgs} args - Arguments to create many User_accounts.
     * @example
     * // Create many User_accounts
     * const user_account = await prisma.user_account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_accountCreateManyArgs>(args?: SelectSubset<T, User_accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_accounts and returns the data saved in the database.
     * @param {User_accountCreateManyAndReturnArgs} args - Arguments to create many User_accounts.
     * @example
     * // Create many User_accounts
     * const user_account = await prisma.user_account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_accounts and only return the `id`
     * const user_accountWithIdOnly = await prisma.user_account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_accountCreateManyAndReturnArgs>(args?: SelectSubset<T, User_accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_account.
     * @param {User_accountDeleteArgs} args - Arguments to delete one User_account.
     * @example
     * // Delete one User_account
     * const User_account = await prisma.user_account.delete({
     *   where: {
     *     // ... filter to delete one User_account
     *   }
     * })
     * 
     */
    delete<T extends User_accountDeleteArgs>(args: SelectSubset<T, User_accountDeleteArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_account.
     * @param {User_accountUpdateArgs} args - Arguments to update one User_account.
     * @example
     * // Update one User_account
     * const user_account = await prisma.user_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_accountUpdateArgs>(args: SelectSubset<T, User_accountUpdateArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_accounts.
     * @param {User_accountDeleteManyArgs} args - Arguments to filter User_accounts to delete.
     * @example
     * // Delete a few User_accounts
     * const { count } = await prisma.user_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_accountDeleteManyArgs>(args?: SelectSubset<T, User_accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_accounts
     * const user_account = await prisma.user_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_accountUpdateManyArgs>(args: SelectSubset<T, User_accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_accounts and returns the data updated in the database.
     * @param {User_accountUpdateManyAndReturnArgs} args - Arguments to update many User_accounts.
     * @example
     * // Update many User_accounts
     * const user_account = await prisma.user_account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_accounts and only return the `id`
     * const user_accountWithIdOnly = await prisma.user_account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_accountUpdateManyAndReturnArgs>(args: SelectSubset<T, User_accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_account.
     * @param {User_accountUpsertArgs} args - Arguments to update or create a User_account.
     * @example
     * // Update or create a User_account
     * const user_account = await prisma.user_account.upsert({
     *   create: {
     *     // ... data to create a User_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_account we want to update
     *   }
     * })
     */
    upsert<T extends User_accountUpsertArgs>(args: SelectSubset<T, User_accountUpsertArgs<ExtArgs>>): Prisma__User_accountClient<$Result.GetResult<Prisma.$User_accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountCountArgs} args - Arguments to filter User_accounts to count.
     * @example
     * // Count the number of User_accounts
     * const count = await prisma.user_account.count({
     *   where: {
     *     // ... the filter for the User_accounts we want to count
     *   }
     * })
    **/
    count<T extends User_accountCountArgs>(
      args?: Subset<T, User_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_accountAggregateArgs>(args: Subset<T, User_accountAggregateArgs>): Prisma.PrismaPromise<GetUser_accountAggregateType<T>>

    /**
     * Group by User_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_accountGroupByArgs['orderBy'] }
        : { orderBy?: User_accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_account model
   */
  readonly fields: User_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_account model
   */
  interface User_accountFieldRefs {
    readonly id: FieldRef<"User_account", 'String'>
    readonly accountId: FieldRef<"User_account", 'String'>
    readonly providerId: FieldRef<"User_account", 'String'>
    readonly userId: FieldRef<"User_account", 'String'>
    readonly accessToken: FieldRef<"User_account", 'String'>
    readonly refreshToken: FieldRef<"User_account", 'String'>
    readonly idToken: FieldRef<"User_account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"User_account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"User_account", 'DateTime'>
    readonly scope: FieldRef<"User_account", 'String'>
    readonly password: FieldRef<"User_account", 'String'>
    readonly createdAt: FieldRef<"User_account", 'DateTime'>
    readonly updatedAt: FieldRef<"User_account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_account findUnique
   */
  export type User_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * Filter, which User_account to fetch.
     */
    where: User_accountWhereUniqueInput
  }

  /**
   * User_account findUniqueOrThrow
   */
  export type User_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * Filter, which User_account to fetch.
     */
    where: User_accountWhereUniqueInput
  }

  /**
   * User_account findFirst
   */
  export type User_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * Filter, which User_account to fetch.
     */
    where?: User_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_accounts to fetch.
     */
    orderBy?: User_accountOrderByWithRelationInput | User_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_accounts.
     */
    cursor?: User_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_accounts.
     */
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * User_account findFirstOrThrow
   */
  export type User_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * Filter, which User_account to fetch.
     */
    where?: User_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_accounts to fetch.
     */
    orderBy?: User_accountOrderByWithRelationInput | User_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_accounts.
     */
    cursor?: User_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_accounts.
     */
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * User_account findMany
   */
  export type User_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * Filter, which User_accounts to fetch.
     */
    where?: User_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_accounts to fetch.
     */
    orderBy?: User_accountOrderByWithRelationInput | User_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_accounts.
     */
    cursor?: User_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_accounts.
     */
    distinct?: User_accountScalarFieldEnum | User_accountScalarFieldEnum[]
  }

  /**
   * User_account create
   */
  export type User_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a User_account.
     */
    data: XOR<User_accountCreateInput, User_accountUncheckedCreateInput>
  }

  /**
   * User_account createMany
   */
  export type User_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_accounts.
     */
    data: User_accountCreateManyInput | User_accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_account createManyAndReturn
   */
  export type User_accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * The data used to create many User_accounts.
     */
    data: User_accountCreateManyInput | User_accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_account update
   */
  export type User_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a User_account.
     */
    data: XOR<User_accountUpdateInput, User_accountUncheckedUpdateInput>
    /**
     * Choose, which User_account to update.
     */
    where: User_accountWhereUniqueInput
  }

  /**
   * User_account updateMany
   */
  export type User_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_accounts.
     */
    data: XOR<User_accountUpdateManyMutationInput, User_accountUncheckedUpdateManyInput>
    /**
     * Filter which User_accounts to update
     */
    where?: User_accountWhereInput
    /**
     * Limit how many User_accounts to update.
     */
    limit?: number
  }

  /**
   * User_account updateManyAndReturn
   */
  export type User_accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * The data used to update User_accounts.
     */
    data: XOR<User_accountUpdateManyMutationInput, User_accountUncheckedUpdateManyInput>
    /**
     * Filter which User_accounts to update
     */
    where?: User_accountWhereInput
    /**
     * Limit how many User_accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_account upsert
   */
  export type User_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the User_account to update in case it exists.
     */
    where: User_accountWhereUniqueInput
    /**
     * In case the User_account found by the `where` argument doesn't exist, create a new User_account with this data.
     */
    create: XOR<User_accountCreateInput, User_accountUncheckedCreateInput>
    /**
     * In case the User_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_accountUpdateInput, User_accountUncheckedUpdateInput>
  }

  /**
   * User_account delete
   */
  export type User_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
    /**
     * Filter which User_account to delete.
     */
    where: User_accountWhereUniqueInput
  }

  /**
   * User_account deleteMany
   */
  export type User_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_accounts to delete
     */
    where?: User_accountWhereInput
    /**
     * Limit how many User_accounts to delete.
     */
    limit?: number
  }

  /**
   * User_account without action
   */
  export type User_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account
     */
    select?: User_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account
     */
    omit?: User_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_accountInclude<ExtArgs> | null
  }


  /**
   * Model User_verification
   */

  export type AggregateUser_verification = {
    _count: User_verificationCountAggregateOutputType | null
    _min: User_verificationMinAggregateOutputType | null
    _max: User_verificationMaxAggregateOutputType | null
  }

  export type User_verificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_verificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_verificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type User_verificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_verificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_verificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type User_verificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_verification to aggregate.
     */
    where?: User_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_verifications to fetch.
     */
    orderBy?: User_verificationOrderByWithRelationInput | User_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_verifications
    **/
    _count?: true | User_verificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_verificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_verificationMaxAggregateInputType
  }

  export type GetUser_verificationAggregateType<T extends User_verificationAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_verification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_verification[P]>
      : GetScalarType<T[P], AggregateUser_verification[P]>
  }




  export type User_verificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_verificationWhereInput
    orderBy?: User_verificationOrderByWithAggregationInput | User_verificationOrderByWithAggregationInput[]
    by: User_verificationScalarFieldEnum[] | User_verificationScalarFieldEnum
    having?: User_verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_verificationCountAggregateInputType | true
    _min?: User_verificationMinAggregateInputType
    _max?: User_verificationMaxAggregateInputType
  }

  export type User_verificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: User_verificationCountAggregateOutputType | null
    _min: User_verificationMinAggregateOutputType | null
    _max: User_verificationMaxAggregateOutputType | null
  }

  type GetUser_verificationGroupByPayload<T extends User_verificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_verificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_verificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_verificationGroupByOutputType[P]>
            : GetScalarType<T[P], User_verificationGroupByOutputType[P]>
        }
      >
    >


  export type User_verificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user_verification"]>

  export type User_verificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user_verification"]>

  export type User_verificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user_verification"]>

  export type User_verificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type User_verificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user_verification"]>

  export type $User_verificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user_verification"]>
    composites: {}
  }

  type User_verificationGetPayload<S extends boolean | null | undefined | User_verificationDefaultArgs> = $Result.GetResult<Prisma.$User_verificationPayload, S>

  type User_verificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_verificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_verificationCountAggregateInputType | true
    }

  export interface User_verificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_verification'], meta: { name: 'User_verification' } }
    /**
     * Find zero or one User_verification that matches the filter.
     * @param {User_verificationFindUniqueArgs} args - Arguments to find a User_verification
     * @example
     * // Get one User_verification
     * const user_verification = await prisma.user_verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_verificationFindUniqueArgs>(args: SelectSubset<T, User_verificationFindUniqueArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_verificationFindUniqueOrThrowArgs} args - Arguments to find a User_verification
     * @example
     * // Get one User_verification
     * const user_verification = await prisma.user_verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_verificationFindUniqueOrThrowArgs>(args: SelectSubset<T, User_verificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationFindFirstArgs} args - Arguments to find a User_verification
     * @example
     * // Get one User_verification
     * const user_verification = await prisma.user_verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_verificationFindFirstArgs>(args?: SelectSubset<T, User_verificationFindFirstArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationFindFirstOrThrowArgs} args - Arguments to find a User_verification
     * @example
     * // Get one User_verification
     * const user_verification = await prisma.user_verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_verificationFindFirstOrThrowArgs>(args?: SelectSubset<T, User_verificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_verifications
     * const user_verifications = await prisma.user_verification.findMany()
     * 
     * // Get first 10 User_verifications
     * const user_verifications = await prisma.user_verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_verificationWithIdOnly = await prisma.user_verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_verificationFindManyArgs>(args?: SelectSubset<T, User_verificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_verification.
     * @param {User_verificationCreateArgs} args - Arguments to create a User_verification.
     * @example
     * // Create one User_verification
     * const User_verification = await prisma.user_verification.create({
     *   data: {
     *     // ... data to create a User_verification
     *   }
     * })
     * 
     */
    create<T extends User_verificationCreateArgs>(args: SelectSubset<T, User_verificationCreateArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_verifications.
     * @param {User_verificationCreateManyArgs} args - Arguments to create many User_verifications.
     * @example
     * // Create many User_verifications
     * const user_verification = await prisma.user_verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_verificationCreateManyArgs>(args?: SelectSubset<T, User_verificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_verifications and returns the data saved in the database.
     * @param {User_verificationCreateManyAndReturnArgs} args - Arguments to create many User_verifications.
     * @example
     * // Create many User_verifications
     * const user_verification = await prisma.user_verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_verifications and only return the `id`
     * const user_verificationWithIdOnly = await prisma.user_verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_verificationCreateManyAndReturnArgs>(args?: SelectSubset<T, User_verificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_verification.
     * @param {User_verificationDeleteArgs} args - Arguments to delete one User_verification.
     * @example
     * // Delete one User_verification
     * const User_verification = await prisma.user_verification.delete({
     *   where: {
     *     // ... filter to delete one User_verification
     *   }
     * })
     * 
     */
    delete<T extends User_verificationDeleteArgs>(args: SelectSubset<T, User_verificationDeleteArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_verification.
     * @param {User_verificationUpdateArgs} args - Arguments to update one User_verification.
     * @example
     * // Update one User_verification
     * const user_verification = await prisma.user_verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_verificationUpdateArgs>(args: SelectSubset<T, User_verificationUpdateArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_verifications.
     * @param {User_verificationDeleteManyArgs} args - Arguments to filter User_verifications to delete.
     * @example
     * // Delete a few User_verifications
     * const { count } = await prisma.user_verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_verificationDeleteManyArgs>(args?: SelectSubset<T, User_verificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_verifications
     * const user_verification = await prisma.user_verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_verificationUpdateManyArgs>(args: SelectSubset<T, User_verificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_verifications and returns the data updated in the database.
     * @param {User_verificationUpdateManyAndReturnArgs} args - Arguments to update many User_verifications.
     * @example
     * // Update many User_verifications
     * const user_verification = await prisma.user_verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_verifications and only return the `id`
     * const user_verificationWithIdOnly = await prisma.user_verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_verificationUpdateManyAndReturnArgs>(args: SelectSubset<T, User_verificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_verification.
     * @param {User_verificationUpsertArgs} args - Arguments to update or create a User_verification.
     * @example
     * // Update or create a User_verification
     * const user_verification = await prisma.user_verification.upsert({
     *   create: {
     *     // ... data to create a User_verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_verification we want to update
     *   }
     * })
     */
    upsert<T extends User_verificationUpsertArgs>(args: SelectSubset<T, User_verificationUpsertArgs<ExtArgs>>): Prisma__User_verificationClient<$Result.GetResult<Prisma.$User_verificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationCountArgs} args - Arguments to filter User_verifications to count.
     * @example
     * // Count the number of User_verifications
     * const count = await prisma.user_verification.count({
     *   where: {
     *     // ... the filter for the User_verifications we want to count
     *   }
     * })
    **/
    count<T extends User_verificationCountArgs>(
      args?: Subset<T, User_verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_verificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_verificationAggregateArgs>(args: Subset<T, User_verificationAggregateArgs>): Prisma.PrismaPromise<GetUser_verificationAggregateType<T>>

    /**
     * Group by User_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_verificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_verificationGroupByArgs['orderBy'] }
        : { orderBy?: User_verificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_verificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_verificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_verification model
   */
  readonly fields: User_verificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_verificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_verification model
   */
  interface User_verificationFieldRefs {
    readonly id: FieldRef<"User_verification", 'String'>
    readonly identifier: FieldRef<"User_verification", 'String'>
    readonly value: FieldRef<"User_verification", 'String'>
    readonly expiresAt: FieldRef<"User_verification", 'DateTime'>
    readonly createdAt: FieldRef<"User_verification", 'DateTime'>
    readonly updatedAt: FieldRef<"User_verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_verification findUnique
   */
  export type User_verificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * Filter, which User_verification to fetch.
     */
    where: User_verificationWhereUniqueInput
  }

  /**
   * User_verification findUniqueOrThrow
   */
  export type User_verificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * Filter, which User_verification to fetch.
     */
    where: User_verificationWhereUniqueInput
  }

  /**
   * User_verification findFirst
   */
  export type User_verificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * Filter, which User_verification to fetch.
     */
    where?: User_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_verifications to fetch.
     */
    orderBy?: User_verificationOrderByWithRelationInput | User_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_verifications.
     */
    cursor?: User_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_verifications.
     */
    distinct?: User_verificationScalarFieldEnum | User_verificationScalarFieldEnum[]
  }

  /**
   * User_verification findFirstOrThrow
   */
  export type User_verificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * Filter, which User_verification to fetch.
     */
    where?: User_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_verifications to fetch.
     */
    orderBy?: User_verificationOrderByWithRelationInput | User_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_verifications.
     */
    cursor?: User_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_verifications.
     */
    distinct?: User_verificationScalarFieldEnum | User_verificationScalarFieldEnum[]
  }

  /**
   * User_verification findMany
   */
  export type User_verificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * Filter, which User_verifications to fetch.
     */
    where?: User_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_verifications to fetch.
     */
    orderBy?: User_verificationOrderByWithRelationInput | User_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_verifications.
     */
    cursor?: User_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_verifications.
     */
    distinct?: User_verificationScalarFieldEnum | User_verificationScalarFieldEnum[]
  }

  /**
   * User_verification create
   */
  export type User_verificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * The data needed to create a User_verification.
     */
    data: XOR<User_verificationCreateInput, User_verificationUncheckedCreateInput>
  }

  /**
   * User_verification createMany
   */
  export type User_verificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_verifications.
     */
    data: User_verificationCreateManyInput | User_verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_verification createManyAndReturn
   */
  export type User_verificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * The data used to create many User_verifications.
     */
    data: User_verificationCreateManyInput | User_verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_verification update
   */
  export type User_verificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * The data needed to update a User_verification.
     */
    data: XOR<User_verificationUpdateInput, User_verificationUncheckedUpdateInput>
    /**
     * Choose, which User_verification to update.
     */
    where: User_verificationWhereUniqueInput
  }

  /**
   * User_verification updateMany
   */
  export type User_verificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_verifications.
     */
    data: XOR<User_verificationUpdateManyMutationInput, User_verificationUncheckedUpdateManyInput>
    /**
     * Filter which User_verifications to update
     */
    where?: User_verificationWhereInput
    /**
     * Limit how many User_verifications to update.
     */
    limit?: number
  }

  /**
   * User_verification updateManyAndReturn
   */
  export type User_verificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * The data used to update User_verifications.
     */
    data: XOR<User_verificationUpdateManyMutationInput, User_verificationUncheckedUpdateManyInput>
    /**
     * Filter which User_verifications to update
     */
    where?: User_verificationWhereInput
    /**
     * Limit how many User_verifications to update.
     */
    limit?: number
  }

  /**
   * User_verification upsert
   */
  export type User_verificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * The filter to search for the User_verification to update in case it exists.
     */
    where: User_verificationWhereUniqueInput
    /**
     * In case the User_verification found by the `where` argument doesn't exist, create a new User_verification with this data.
     */
    create: XOR<User_verificationCreateInput, User_verificationUncheckedCreateInput>
    /**
     * In case the User_verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_verificationUpdateInput, User_verificationUncheckedUpdateInput>
  }

  /**
   * User_verification delete
   */
  export type User_verificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
    /**
     * Filter which User_verification to delete.
     */
    where: User_verificationWhereUniqueInput
  }

  /**
   * User_verification deleteMany
   */
  export type User_verificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_verifications to delete
     */
    where?: User_verificationWhereInput
    /**
     * Limit how many User_verifications to delete.
     */
    limit?: number
  }

  /**
   * User_verification without action
   */
  export type User_verificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_verification
     */
    select?: User_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_verification
     */
    omit?: User_verificationOmit<ExtArgs> | null
  }


  /**
   * Model Recharge
   */

  export type AggregateRecharge = {
    _count: RechargeCountAggregateOutputType | null
    _avg: RechargeAvgAggregateOutputType | null
    _sum: RechargeSumAggregateOutputType | null
    _min: RechargeMinAggregateOutputType | null
    _max: RechargeMaxAggregateOutputType | null
  }

  export type RechargeAvgAggregateOutputType = {
    id: number | null
    fullHour: number | null
    offPeakHour: number | null
    totalCost: number | null
  }

  export type RechargeSumAggregateOutputType = {
    id: number | null
    fullHour: number | null
    offPeakHour: number | null
    totalCost: number | null
  }

  export type RechargeMinAggregateOutputType = {
    id: number | null
    startAt: Date | null
    endAt: Date | null
    fullHour: number | null
    offPeakHour: number | null
    totalCost: number | null
    createdAt: Date | null
  }

  export type RechargeMaxAggregateOutputType = {
    id: number | null
    startAt: Date | null
    endAt: Date | null
    fullHour: number | null
    offPeakHour: number | null
    totalCost: number | null
    createdAt: Date | null
  }

  export type RechargeCountAggregateOutputType = {
    id: number
    startAt: number
    endAt: number
    fullHour: number
    offPeakHour: number
    totalCost: number
    createdAt: number
    _all: number
  }


  export type RechargeAvgAggregateInputType = {
    id?: true
    fullHour?: true
    offPeakHour?: true
    totalCost?: true
  }

  export type RechargeSumAggregateInputType = {
    id?: true
    fullHour?: true
    offPeakHour?: true
    totalCost?: true
  }

  export type RechargeMinAggregateInputType = {
    id?: true
    startAt?: true
    endAt?: true
    fullHour?: true
    offPeakHour?: true
    totalCost?: true
    createdAt?: true
  }

  export type RechargeMaxAggregateInputType = {
    id?: true
    startAt?: true
    endAt?: true
    fullHour?: true
    offPeakHour?: true
    totalCost?: true
    createdAt?: true
  }

  export type RechargeCountAggregateInputType = {
    id?: true
    startAt?: true
    endAt?: true
    fullHour?: true
    offPeakHour?: true
    totalCost?: true
    createdAt?: true
    _all?: true
  }

  export type RechargeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recharge to aggregate.
     */
    where?: RechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recharges to fetch.
     */
    orderBy?: RechargeOrderByWithRelationInput | RechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recharges
    **/
    _count?: true | RechargeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RechargeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RechargeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RechargeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RechargeMaxAggregateInputType
  }

  export type GetRechargeAggregateType<T extends RechargeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecharge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecharge[P]>
      : GetScalarType<T[P], AggregateRecharge[P]>
  }




  export type RechargeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RechargeWhereInput
    orderBy?: RechargeOrderByWithAggregationInput | RechargeOrderByWithAggregationInput[]
    by: RechargeScalarFieldEnum[] | RechargeScalarFieldEnum
    having?: RechargeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RechargeCountAggregateInputType | true
    _avg?: RechargeAvgAggregateInputType
    _sum?: RechargeSumAggregateInputType
    _min?: RechargeMinAggregateInputType
    _max?: RechargeMaxAggregateInputType
  }

  export type RechargeGroupByOutputType = {
    id: number
    startAt: Date
    endAt: Date
    fullHour: number
    offPeakHour: number
    totalCost: number
    createdAt: Date
    _count: RechargeCountAggregateOutputType | null
    _avg: RechargeAvgAggregateOutputType | null
    _sum: RechargeSumAggregateOutputType | null
    _min: RechargeMinAggregateOutputType | null
    _max: RechargeMaxAggregateOutputType | null
  }

  type GetRechargeGroupByPayload<T extends RechargeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RechargeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RechargeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RechargeGroupByOutputType[P]>
            : GetScalarType<T[P], RechargeGroupByOutputType[P]>
        }
      >
    >


  export type RechargeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAt?: boolean
    endAt?: boolean
    fullHour?: boolean
    offPeakHour?: boolean
    totalCost?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recharge"]>

  export type RechargeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAt?: boolean
    endAt?: boolean
    fullHour?: boolean
    offPeakHour?: boolean
    totalCost?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recharge"]>

  export type RechargeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAt?: boolean
    endAt?: boolean
    fullHour?: boolean
    offPeakHour?: boolean
    totalCost?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recharge"]>

  export type RechargeSelectScalar = {
    id?: boolean
    startAt?: boolean
    endAt?: boolean
    fullHour?: boolean
    offPeakHour?: boolean
    totalCost?: boolean
    createdAt?: boolean
  }

  export type RechargeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startAt" | "endAt" | "fullHour" | "offPeakHour" | "totalCost" | "createdAt", ExtArgs["result"]["recharge"]>

  export type $RechargePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recharge"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startAt: Date
      endAt: Date
      fullHour: number
      offPeakHour: number
      totalCost: number
      createdAt: Date
    }, ExtArgs["result"]["recharge"]>
    composites: {}
  }

  type RechargeGetPayload<S extends boolean | null | undefined | RechargeDefaultArgs> = $Result.GetResult<Prisma.$RechargePayload, S>

  type RechargeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RechargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RechargeCountAggregateInputType | true
    }

  export interface RechargeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recharge'], meta: { name: 'Recharge' } }
    /**
     * Find zero or one Recharge that matches the filter.
     * @param {RechargeFindUniqueArgs} args - Arguments to find a Recharge
     * @example
     * // Get one Recharge
     * const recharge = await prisma.recharge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RechargeFindUniqueArgs>(args: SelectSubset<T, RechargeFindUniqueArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recharge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RechargeFindUniqueOrThrowArgs} args - Arguments to find a Recharge
     * @example
     * // Get one Recharge
     * const recharge = await prisma.recharge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RechargeFindUniqueOrThrowArgs>(args: SelectSubset<T, RechargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recharge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeFindFirstArgs} args - Arguments to find a Recharge
     * @example
     * // Get one Recharge
     * const recharge = await prisma.recharge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RechargeFindFirstArgs>(args?: SelectSubset<T, RechargeFindFirstArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recharge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeFindFirstOrThrowArgs} args - Arguments to find a Recharge
     * @example
     * // Get one Recharge
     * const recharge = await prisma.recharge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RechargeFindFirstOrThrowArgs>(args?: SelectSubset<T, RechargeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recharges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recharges
     * const recharges = await prisma.recharge.findMany()
     * 
     * // Get first 10 Recharges
     * const recharges = await prisma.recharge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rechargeWithIdOnly = await prisma.recharge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RechargeFindManyArgs>(args?: SelectSubset<T, RechargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recharge.
     * @param {RechargeCreateArgs} args - Arguments to create a Recharge.
     * @example
     * // Create one Recharge
     * const Recharge = await prisma.recharge.create({
     *   data: {
     *     // ... data to create a Recharge
     *   }
     * })
     * 
     */
    create<T extends RechargeCreateArgs>(args: SelectSubset<T, RechargeCreateArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recharges.
     * @param {RechargeCreateManyArgs} args - Arguments to create many Recharges.
     * @example
     * // Create many Recharges
     * const recharge = await prisma.recharge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RechargeCreateManyArgs>(args?: SelectSubset<T, RechargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recharges and returns the data saved in the database.
     * @param {RechargeCreateManyAndReturnArgs} args - Arguments to create many Recharges.
     * @example
     * // Create many Recharges
     * const recharge = await prisma.recharge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recharges and only return the `id`
     * const rechargeWithIdOnly = await prisma.recharge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RechargeCreateManyAndReturnArgs>(args?: SelectSubset<T, RechargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recharge.
     * @param {RechargeDeleteArgs} args - Arguments to delete one Recharge.
     * @example
     * // Delete one Recharge
     * const Recharge = await prisma.recharge.delete({
     *   where: {
     *     // ... filter to delete one Recharge
     *   }
     * })
     * 
     */
    delete<T extends RechargeDeleteArgs>(args: SelectSubset<T, RechargeDeleteArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recharge.
     * @param {RechargeUpdateArgs} args - Arguments to update one Recharge.
     * @example
     * // Update one Recharge
     * const recharge = await prisma.recharge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RechargeUpdateArgs>(args: SelectSubset<T, RechargeUpdateArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recharges.
     * @param {RechargeDeleteManyArgs} args - Arguments to filter Recharges to delete.
     * @example
     * // Delete a few Recharges
     * const { count } = await prisma.recharge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RechargeDeleteManyArgs>(args?: SelectSubset<T, RechargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recharges
     * const recharge = await prisma.recharge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RechargeUpdateManyArgs>(args: SelectSubset<T, RechargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recharges and returns the data updated in the database.
     * @param {RechargeUpdateManyAndReturnArgs} args - Arguments to update many Recharges.
     * @example
     * // Update many Recharges
     * const recharge = await prisma.recharge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recharges and only return the `id`
     * const rechargeWithIdOnly = await prisma.recharge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RechargeUpdateManyAndReturnArgs>(args: SelectSubset<T, RechargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recharge.
     * @param {RechargeUpsertArgs} args - Arguments to update or create a Recharge.
     * @example
     * // Update or create a Recharge
     * const recharge = await prisma.recharge.upsert({
     *   create: {
     *     // ... data to create a Recharge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recharge we want to update
     *   }
     * })
     */
    upsert<T extends RechargeUpsertArgs>(args: SelectSubset<T, RechargeUpsertArgs<ExtArgs>>): Prisma__RechargeClient<$Result.GetResult<Prisma.$RechargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeCountArgs} args - Arguments to filter Recharges to count.
     * @example
     * // Count the number of Recharges
     * const count = await prisma.recharge.count({
     *   where: {
     *     // ... the filter for the Recharges we want to count
     *   }
     * })
    **/
    count<T extends RechargeCountArgs>(
      args?: Subset<T, RechargeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RechargeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RechargeAggregateArgs>(args: Subset<T, RechargeAggregateArgs>): Prisma.PrismaPromise<GetRechargeAggregateType<T>>

    /**
     * Group by Recharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RechargeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RechargeGroupByArgs['orderBy'] }
        : { orderBy?: RechargeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RechargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRechargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recharge model
   */
  readonly fields: RechargeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recharge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RechargeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recharge model
   */
  interface RechargeFieldRefs {
    readonly id: FieldRef<"Recharge", 'Int'>
    readonly startAt: FieldRef<"Recharge", 'DateTime'>
    readonly endAt: FieldRef<"Recharge", 'DateTime'>
    readonly fullHour: FieldRef<"Recharge", 'Float'>
    readonly offPeakHour: FieldRef<"Recharge", 'Float'>
    readonly totalCost: FieldRef<"Recharge", 'Float'>
    readonly createdAt: FieldRef<"Recharge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recharge findUnique
   */
  export type RechargeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * Filter, which Recharge to fetch.
     */
    where: RechargeWhereUniqueInput
  }

  /**
   * Recharge findUniqueOrThrow
   */
  export type RechargeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * Filter, which Recharge to fetch.
     */
    where: RechargeWhereUniqueInput
  }

  /**
   * Recharge findFirst
   */
  export type RechargeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * Filter, which Recharge to fetch.
     */
    where?: RechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recharges to fetch.
     */
    orderBy?: RechargeOrderByWithRelationInput | RechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recharges.
     */
    cursor?: RechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recharges.
     */
    distinct?: RechargeScalarFieldEnum | RechargeScalarFieldEnum[]
  }

  /**
   * Recharge findFirstOrThrow
   */
  export type RechargeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * Filter, which Recharge to fetch.
     */
    where?: RechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recharges to fetch.
     */
    orderBy?: RechargeOrderByWithRelationInput | RechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recharges.
     */
    cursor?: RechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recharges.
     */
    distinct?: RechargeScalarFieldEnum | RechargeScalarFieldEnum[]
  }

  /**
   * Recharge findMany
   */
  export type RechargeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * Filter, which Recharges to fetch.
     */
    where?: RechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recharges to fetch.
     */
    orderBy?: RechargeOrderByWithRelationInput | RechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recharges.
     */
    cursor?: RechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recharges.
     */
    distinct?: RechargeScalarFieldEnum | RechargeScalarFieldEnum[]
  }

  /**
   * Recharge create
   */
  export type RechargeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * The data needed to create a Recharge.
     */
    data: XOR<RechargeCreateInput, RechargeUncheckedCreateInput>
  }

  /**
   * Recharge createMany
   */
  export type RechargeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recharges.
     */
    data: RechargeCreateManyInput | RechargeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recharge createManyAndReturn
   */
  export type RechargeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * The data used to create many Recharges.
     */
    data: RechargeCreateManyInput | RechargeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recharge update
   */
  export type RechargeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * The data needed to update a Recharge.
     */
    data: XOR<RechargeUpdateInput, RechargeUncheckedUpdateInput>
    /**
     * Choose, which Recharge to update.
     */
    where: RechargeWhereUniqueInput
  }

  /**
   * Recharge updateMany
   */
  export type RechargeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recharges.
     */
    data: XOR<RechargeUpdateManyMutationInput, RechargeUncheckedUpdateManyInput>
    /**
     * Filter which Recharges to update
     */
    where?: RechargeWhereInput
    /**
     * Limit how many Recharges to update.
     */
    limit?: number
  }

  /**
   * Recharge updateManyAndReturn
   */
  export type RechargeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * The data used to update Recharges.
     */
    data: XOR<RechargeUpdateManyMutationInput, RechargeUncheckedUpdateManyInput>
    /**
     * Filter which Recharges to update
     */
    where?: RechargeWhereInput
    /**
     * Limit how many Recharges to update.
     */
    limit?: number
  }

  /**
   * Recharge upsert
   */
  export type RechargeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * The filter to search for the Recharge to update in case it exists.
     */
    where: RechargeWhereUniqueInput
    /**
     * In case the Recharge found by the `where` argument doesn't exist, create a new Recharge with this data.
     */
    create: XOR<RechargeCreateInput, RechargeUncheckedCreateInput>
    /**
     * In case the Recharge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RechargeUpdateInput, RechargeUncheckedUpdateInput>
  }

  /**
   * Recharge delete
   */
  export type RechargeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
    /**
     * Filter which Recharge to delete.
     */
    where: RechargeWhereUniqueInput
  }

  /**
   * Recharge deleteMany
   */
  export type RechargeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recharges to delete
     */
    where?: RechargeWhereInput
    /**
     * Limit how many Recharges to delete.
     */
    limit?: number
  }

  /**
   * Recharge without action
   */
  export type RechargeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recharge
     */
    select?: RechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recharge
     */
    omit?: RechargeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_sessionsScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type User_sessionsScalarFieldEnum = (typeof User_sessionsScalarFieldEnum)[keyof typeof User_sessionsScalarFieldEnum]


  export const User_accountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type User_accountScalarFieldEnum = (typeof User_accountScalarFieldEnum)[keyof typeof User_accountScalarFieldEnum]


  export const User_verificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type User_verificationScalarFieldEnum = (typeof User_verificationScalarFieldEnum)[keyof typeof User_verificationScalarFieldEnum]


  export const RechargeScalarFieldEnum: {
    id: 'id',
    startAt: 'startAt',
    endAt: 'endAt',
    fullHour: 'fullHour',
    offPeakHour: 'offPeakHour',
    totalCost: 'totalCost',
    createdAt: 'createdAt'
  };

  export type RechargeScalarFieldEnum = (typeof RechargeScalarFieldEnum)[keyof typeof RechargeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    user_sessionss?: User_sessionsListRelationFilter
    user_accounts?: User_accountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_sessionss?: User_sessionsOrderByRelationAggregateInput
    user_accounts?: User_accountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    user_sessionss?: User_sessionsListRelationFilter
    user_accounts?: User_accountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type User_sessionsWhereInput = {
    AND?: User_sessionsWhereInput | User_sessionsWhereInput[]
    OR?: User_sessionsWhereInput[]
    NOT?: User_sessionsWhereInput | User_sessionsWhereInput[]
    id?: StringFilter<"User_sessions"> | string
    expiresAt?: DateTimeFilter<"User_sessions"> | Date | string
    token?: StringFilter<"User_sessions"> | string
    createdAt?: DateTimeFilter<"User_sessions"> | Date | string
    updatedAt?: DateTimeFilter<"User_sessions"> | Date | string
    ipAddress?: StringNullableFilter<"User_sessions"> | string | null
    userAgent?: StringNullableFilter<"User_sessions"> | string | null
    userId?: StringFilter<"User_sessions"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type User_sessionsOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type User_sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: User_sessionsWhereInput | User_sessionsWhereInput[]
    OR?: User_sessionsWhereInput[]
    NOT?: User_sessionsWhereInput | User_sessionsWhereInput[]
    expiresAt?: DateTimeFilter<"User_sessions"> | Date | string
    createdAt?: DateTimeFilter<"User_sessions"> | Date | string
    updatedAt?: DateTimeFilter<"User_sessions"> | Date | string
    ipAddress?: StringNullableFilter<"User_sessions"> | string | null
    userAgent?: StringNullableFilter<"User_sessions"> | string | null
    userId?: StringFilter<"User_sessions"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type User_sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: User_sessionsCountOrderByAggregateInput
    _max?: User_sessionsMaxOrderByAggregateInput
    _min?: User_sessionsMinOrderByAggregateInput
  }

  export type User_sessionsScalarWhereWithAggregatesInput = {
    AND?: User_sessionsScalarWhereWithAggregatesInput | User_sessionsScalarWhereWithAggregatesInput[]
    OR?: User_sessionsScalarWhereWithAggregatesInput[]
    NOT?: User_sessionsScalarWhereWithAggregatesInput | User_sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_sessions"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"User_sessions"> | Date | string
    token?: StringWithAggregatesFilter<"User_sessions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User_sessions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User_sessions"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"User_sessions"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"User_sessions"> | string | null
    userId?: StringWithAggregatesFilter<"User_sessions"> | string
  }

  export type User_accountWhereInput = {
    AND?: User_accountWhereInput | User_accountWhereInput[]
    OR?: User_accountWhereInput[]
    NOT?: User_accountWhereInput | User_accountWhereInput[]
    id?: StringFilter<"User_account"> | string
    accountId?: StringFilter<"User_account"> | string
    providerId?: StringFilter<"User_account"> | string
    userId?: StringFilter<"User_account"> | string
    accessToken?: StringNullableFilter<"User_account"> | string | null
    refreshToken?: StringNullableFilter<"User_account"> | string | null
    idToken?: StringNullableFilter<"User_account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"User_account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"User_account"> | Date | string | null
    scope?: StringNullableFilter<"User_account"> | string | null
    password?: StringNullableFilter<"User_account"> | string | null
    createdAt?: DateTimeFilter<"User_account"> | Date | string
    updatedAt?: DateTimeFilter<"User_account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type User_accountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type User_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: User_accountWhereInput | User_accountWhereInput[]
    OR?: User_accountWhereInput[]
    NOT?: User_accountWhereInput | User_accountWhereInput[]
    accountId?: StringFilter<"User_account"> | string
    providerId?: StringFilter<"User_account"> | string
    userId?: StringFilter<"User_account"> | string
    accessToken?: StringNullableFilter<"User_account"> | string | null
    refreshToken?: StringNullableFilter<"User_account"> | string | null
    idToken?: StringNullableFilter<"User_account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"User_account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"User_account"> | Date | string | null
    scope?: StringNullableFilter<"User_account"> | string | null
    password?: StringNullableFilter<"User_account"> | string | null
    createdAt?: DateTimeFilter<"User_account"> | Date | string
    updatedAt?: DateTimeFilter<"User_account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type User_accountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: User_accountCountOrderByAggregateInput
    _max?: User_accountMaxOrderByAggregateInput
    _min?: User_accountMinOrderByAggregateInput
  }

  export type User_accountScalarWhereWithAggregatesInput = {
    AND?: User_accountScalarWhereWithAggregatesInput | User_accountScalarWhereWithAggregatesInput[]
    OR?: User_accountScalarWhereWithAggregatesInput[]
    NOT?: User_accountScalarWhereWithAggregatesInput | User_accountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_account"> | string
    accountId?: StringWithAggregatesFilter<"User_account"> | string
    providerId?: StringWithAggregatesFilter<"User_account"> | string
    userId?: StringWithAggregatesFilter<"User_account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"User_account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User_account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"User_account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User_account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User_account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"User_account"> | string | null
    password?: StringNullableWithAggregatesFilter<"User_account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User_account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User_account"> | Date | string
  }

  export type User_verificationWhereInput = {
    AND?: User_verificationWhereInput | User_verificationWhereInput[]
    OR?: User_verificationWhereInput[]
    NOT?: User_verificationWhereInput | User_verificationWhereInput[]
    id?: StringFilter<"User_verification"> | string
    identifier?: StringFilter<"User_verification"> | string
    value?: StringFilter<"User_verification"> | string
    expiresAt?: DateTimeFilter<"User_verification"> | Date | string
    createdAt?: DateTimeFilter<"User_verification"> | Date | string
    updatedAt?: DateTimeFilter<"User_verification"> | Date | string
  }

  export type User_verificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_verificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: User_verificationWhereInput | User_verificationWhereInput[]
    OR?: User_verificationWhereInput[]
    NOT?: User_verificationWhereInput | User_verificationWhereInput[]
    identifier?: StringFilter<"User_verification"> | string
    value?: StringFilter<"User_verification"> | string
    expiresAt?: DateTimeFilter<"User_verification"> | Date | string
    createdAt?: DateTimeFilter<"User_verification"> | Date | string
    updatedAt?: DateTimeFilter<"User_verification"> | Date | string
  }, "id">

  export type User_verificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: User_verificationCountOrderByAggregateInput
    _max?: User_verificationMaxOrderByAggregateInput
    _min?: User_verificationMinOrderByAggregateInput
  }

  export type User_verificationScalarWhereWithAggregatesInput = {
    AND?: User_verificationScalarWhereWithAggregatesInput | User_verificationScalarWhereWithAggregatesInput[]
    OR?: User_verificationScalarWhereWithAggregatesInput[]
    NOT?: User_verificationScalarWhereWithAggregatesInput | User_verificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_verification"> | string
    identifier?: StringWithAggregatesFilter<"User_verification"> | string
    value?: StringWithAggregatesFilter<"User_verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"User_verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User_verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User_verification"> | Date | string
  }

  export type RechargeWhereInput = {
    AND?: RechargeWhereInput | RechargeWhereInput[]
    OR?: RechargeWhereInput[]
    NOT?: RechargeWhereInput | RechargeWhereInput[]
    id?: IntFilter<"Recharge"> | number
    startAt?: DateTimeFilter<"Recharge"> | Date | string
    endAt?: DateTimeFilter<"Recharge"> | Date | string
    fullHour?: FloatFilter<"Recharge"> | number
    offPeakHour?: FloatFilter<"Recharge"> | number
    totalCost?: FloatFilter<"Recharge"> | number
    createdAt?: DateTimeFilter<"Recharge"> | Date | string
  }

  export type RechargeOrderByWithRelationInput = {
    id?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    fullHour?: SortOrder
    offPeakHour?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
  }

  export type RechargeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RechargeWhereInput | RechargeWhereInput[]
    OR?: RechargeWhereInput[]
    NOT?: RechargeWhereInput | RechargeWhereInput[]
    startAt?: DateTimeFilter<"Recharge"> | Date | string
    endAt?: DateTimeFilter<"Recharge"> | Date | string
    fullHour?: FloatFilter<"Recharge"> | number
    offPeakHour?: FloatFilter<"Recharge"> | number
    totalCost?: FloatFilter<"Recharge"> | number
    createdAt?: DateTimeFilter<"Recharge"> | Date | string
  }, "id">

  export type RechargeOrderByWithAggregationInput = {
    id?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    fullHour?: SortOrder
    offPeakHour?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
    _count?: RechargeCountOrderByAggregateInput
    _avg?: RechargeAvgOrderByAggregateInput
    _max?: RechargeMaxOrderByAggregateInput
    _min?: RechargeMinOrderByAggregateInput
    _sum?: RechargeSumOrderByAggregateInput
  }

  export type RechargeScalarWhereWithAggregatesInput = {
    AND?: RechargeScalarWhereWithAggregatesInput | RechargeScalarWhereWithAggregatesInput[]
    OR?: RechargeScalarWhereWithAggregatesInput[]
    NOT?: RechargeScalarWhereWithAggregatesInput | RechargeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recharge"> | number
    startAt?: DateTimeWithAggregatesFilter<"Recharge"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Recharge"> | Date | string
    fullHour?: FloatWithAggregatesFilter<"Recharge"> | number
    offPeakHour?: FloatWithAggregatesFilter<"Recharge"> | number
    totalCost?: FloatWithAggregatesFilter<"Recharge"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Recharge"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_sessionss?: User_sessionsCreateNestedManyWithoutUserInput
    user_accounts?: User_accountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_sessionss?: User_sessionsUncheckedCreateNestedManyWithoutUserInput
    user_accounts?: User_accountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_sessionss?: User_sessionsUpdateManyWithoutUserNestedInput
    user_accounts?: User_accountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_sessionss?: User_sessionsUncheckedUpdateManyWithoutUserNestedInput
    user_accounts?: User_accountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_sessionsCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutUser_sessionssInput
  }

  export type User_sessionsUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type User_sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutUser_sessionssNestedInput
  }

  export type User_sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type User_sessionsCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type User_sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type User_accountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUser_accountsInput
  }

  export type User_accountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_accountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_accountsNestedInput
  }

  export type User_accountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_accountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_accountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_accountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_verificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_verificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_verificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_verificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_verificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_verificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_verificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeCreateInput = {
    startAt: Date | string
    endAt: Date | string
    fullHour: number
    offPeakHour: number
    totalCost: number
    createdAt?: Date | string
  }

  export type RechargeUncheckedCreateInput = {
    id?: number
    startAt: Date | string
    endAt: Date | string
    fullHour: number
    offPeakHour: number
    totalCost: number
    createdAt?: Date | string
  }

  export type RechargeUpdateInput = {
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullHour?: FloatFieldUpdateOperationsInput | number
    offPeakHour?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullHour?: FloatFieldUpdateOperationsInput | number
    offPeakHour?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeCreateManyInput = {
    id?: number
    startAt: Date | string
    endAt: Date | string
    fullHour: number
    offPeakHour: number
    totalCost: number
    createdAt?: Date | string
  }

  export type RechargeUpdateManyMutationInput = {
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullHour?: FloatFieldUpdateOperationsInput | number
    offPeakHour?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullHour?: FloatFieldUpdateOperationsInput | number
    offPeakHour?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_sessionsListRelationFilter = {
    every?: User_sessionsWhereInput
    some?: User_sessionsWhereInput
    none?: User_sessionsWhereInput
  }

  export type User_accountListRelationFilter = {
    every?: User_accountWhereInput
    some?: User_accountWhereInput
    none?: User_accountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type User_sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type User_sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type User_sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type User_sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type User_accountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_accountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type User_verificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_verificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_verificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RechargeCountOrderByAggregateInput = {
    id?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    fullHour?: SortOrder
    offPeakHour?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
  }

  export type RechargeAvgOrderByAggregateInput = {
    id?: SortOrder
    fullHour?: SortOrder
    offPeakHour?: SortOrder
    totalCost?: SortOrder
  }

  export type RechargeMaxOrderByAggregateInput = {
    id?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    fullHour?: SortOrder
    offPeakHour?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
  }

  export type RechargeMinOrderByAggregateInput = {
    id?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    fullHour?: SortOrder
    offPeakHour?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
  }

  export type RechargeSumOrderByAggregateInput = {
    id?: SortOrder
    fullHour?: SortOrder
    offPeakHour?: SortOrder
    totalCost?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type User_sessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<User_sessionsCreateWithoutUserInput, User_sessionsUncheckedCreateWithoutUserInput> | User_sessionsCreateWithoutUserInput[] | User_sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_sessionsCreateOrConnectWithoutUserInput | User_sessionsCreateOrConnectWithoutUserInput[]
    createMany?: User_sessionsCreateManyUserInputEnvelope
    connect?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
  }

  export type User_accountCreateNestedManyWithoutUserInput = {
    create?: XOR<User_accountCreateWithoutUserInput, User_accountUncheckedCreateWithoutUserInput> | User_accountCreateWithoutUserInput[] | User_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_accountCreateOrConnectWithoutUserInput | User_accountCreateOrConnectWithoutUserInput[]
    createMany?: User_accountCreateManyUserInputEnvelope
    connect?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
  }

  export type User_sessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<User_sessionsCreateWithoutUserInput, User_sessionsUncheckedCreateWithoutUserInput> | User_sessionsCreateWithoutUserInput[] | User_sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_sessionsCreateOrConnectWithoutUserInput | User_sessionsCreateOrConnectWithoutUserInput[]
    createMany?: User_sessionsCreateManyUserInputEnvelope
    connect?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
  }

  export type User_accountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<User_accountCreateWithoutUserInput, User_accountUncheckedCreateWithoutUserInput> | User_accountCreateWithoutUserInput[] | User_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_accountCreateOrConnectWithoutUserInput | User_accountCreateOrConnectWithoutUserInput[]
    createMany?: User_accountCreateManyUserInputEnvelope
    connect?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type User_sessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_sessionsCreateWithoutUserInput, User_sessionsUncheckedCreateWithoutUserInput> | User_sessionsCreateWithoutUserInput[] | User_sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_sessionsCreateOrConnectWithoutUserInput | User_sessionsCreateOrConnectWithoutUserInput[]
    upsert?: User_sessionsUpsertWithWhereUniqueWithoutUserInput | User_sessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_sessionsCreateManyUserInputEnvelope
    set?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    disconnect?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    delete?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    connect?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    update?: User_sessionsUpdateWithWhereUniqueWithoutUserInput | User_sessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_sessionsUpdateManyWithWhereWithoutUserInput | User_sessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_sessionsScalarWhereInput | User_sessionsScalarWhereInput[]
  }

  export type User_accountUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_accountCreateWithoutUserInput, User_accountUncheckedCreateWithoutUserInput> | User_accountCreateWithoutUserInput[] | User_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_accountCreateOrConnectWithoutUserInput | User_accountCreateOrConnectWithoutUserInput[]
    upsert?: User_accountUpsertWithWhereUniqueWithoutUserInput | User_accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_accountCreateManyUserInputEnvelope
    set?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    disconnect?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    delete?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    connect?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    update?: User_accountUpdateWithWhereUniqueWithoutUserInput | User_accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_accountUpdateManyWithWhereWithoutUserInput | User_accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_accountScalarWhereInput | User_accountScalarWhereInput[]
  }

  export type User_sessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_sessionsCreateWithoutUserInput, User_sessionsUncheckedCreateWithoutUserInput> | User_sessionsCreateWithoutUserInput[] | User_sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_sessionsCreateOrConnectWithoutUserInput | User_sessionsCreateOrConnectWithoutUserInput[]
    upsert?: User_sessionsUpsertWithWhereUniqueWithoutUserInput | User_sessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_sessionsCreateManyUserInputEnvelope
    set?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    disconnect?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    delete?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    connect?: User_sessionsWhereUniqueInput | User_sessionsWhereUniqueInput[]
    update?: User_sessionsUpdateWithWhereUniqueWithoutUserInput | User_sessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_sessionsUpdateManyWithWhereWithoutUserInput | User_sessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_sessionsScalarWhereInput | User_sessionsScalarWhereInput[]
  }

  export type User_accountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_accountCreateWithoutUserInput, User_accountUncheckedCreateWithoutUserInput> | User_accountCreateWithoutUserInput[] | User_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_accountCreateOrConnectWithoutUserInput | User_accountCreateOrConnectWithoutUserInput[]
    upsert?: User_accountUpsertWithWhereUniqueWithoutUserInput | User_accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_accountCreateManyUserInputEnvelope
    set?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    disconnect?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    delete?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    connect?: User_accountWhereUniqueInput | User_accountWhereUniqueInput[]
    update?: User_accountUpdateWithWhereUniqueWithoutUserInput | User_accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_accountUpdateManyWithWhereWithoutUserInput | User_accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_accountScalarWhereInput | User_accountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser_sessionssInput = {
    create?: XOR<UserCreateWithoutUser_sessionssInput, UserUncheckedCreateWithoutUser_sessionssInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_sessionssInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_sessionssNestedInput = {
    create?: XOR<UserCreateWithoutUser_sessionssInput, UserUncheckedCreateWithoutUser_sessionssInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_sessionssInput
    upsert?: UserUpsertWithoutUser_sessionssInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_sessionssInput, UserUpdateWithoutUser_sessionssInput>, UserUncheckedUpdateWithoutUser_sessionssInput>
  }

  export type UserCreateNestedOneWithoutUser_accountsInput = {
    create?: XOR<UserCreateWithoutUser_accountsInput, UserUncheckedCreateWithoutUser_accountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_accountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUser_accountsNestedInput = {
    create?: XOR<UserCreateWithoutUser_accountsInput, UserUncheckedCreateWithoutUser_accountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_accountsInput
    upsert?: UserUpsertWithoutUser_accountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_accountsInput, UserUpdateWithoutUser_accountsInput>, UserUncheckedUpdateWithoutUser_accountsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type User_sessionsCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type User_sessionsUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type User_sessionsCreateOrConnectWithoutUserInput = {
    where: User_sessionsWhereUniqueInput
    create: XOR<User_sessionsCreateWithoutUserInput, User_sessionsUncheckedCreateWithoutUserInput>
  }

  export type User_sessionsCreateManyUserInputEnvelope = {
    data: User_sessionsCreateManyUserInput | User_sessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type User_accountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_accountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_accountCreateOrConnectWithoutUserInput = {
    where: User_accountWhereUniqueInput
    create: XOR<User_accountCreateWithoutUserInput, User_accountUncheckedCreateWithoutUserInput>
  }

  export type User_accountCreateManyUserInputEnvelope = {
    data: User_accountCreateManyUserInput | User_accountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type User_sessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: User_sessionsWhereUniqueInput
    update: XOR<User_sessionsUpdateWithoutUserInput, User_sessionsUncheckedUpdateWithoutUserInput>
    create: XOR<User_sessionsCreateWithoutUserInput, User_sessionsUncheckedCreateWithoutUserInput>
  }

  export type User_sessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: User_sessionsWhereUniqueInput
    data: XOR<User_sessionsUpdateWithoutUserInput, User_sessionsUncheckedUpdateWithoutUserInput>
  }

  export type User_sessionsUpdateManyWithWhereWithoutUserInput = {
    where: User_sessionsScalarWhereInput
    data: XOR<User_sessionsUpdateManyMutationInput, User_sessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type User_sessionsScalarWhereInput = {
    AND?: User_sessionsScalarWhereInput | User_sessionsScalarWhereInput[]
    OR?: User_sessionsScalarWhereInput[]
    NOT?: User_sessionsScalarWhereInput | User_sessionsScalarWhereInput[]
    id?: StringFilter<"User_sessions"> | string
    expiresAt?: DateTimeFilter<"User_sessions"> | Date | string
    token?: StringFilter<"User_sessions"> | string
    createdAt?: DateTimeFilter<"User_sessions"> | Date | string
    updatedAt?: DateTimeFilter<"User_sessions"> | Date | string
    ipAddress?: StringNullableFilter<"User_sessions"> | string | null
    userAgent?: StringNullableFilter<"User_sessions"> | string | null
    userId?: StringFilter<"User_sessions"> | string
  }

  export type User_accountUpsertWithWhereUniqueWithoutUserInput = {
    where: User_accountWhereUniqueInput
    update: XOR<User_accountUpdateWithoutUserInput, User_accountUncheckedUpdateWithoutUserInput>
    create: XOR<User_accountCreateWithoutUserInput, User_accountUncheckedCreateWithoutUserInput>
  }

  export type User_accountUpdateWithWhereUniqueWithoutUserInput = {
    where: User_accountWhereUniqueInput
    data: XOR<User_accountUpdateWithoutUserInput, User_accountUncheckedUpdateWithoutUserInput>
  }

  export type User_accountUpdateManyWithWhereWithoutUserInput = {
    where: User_accountScalarWhereInput
    data: XOR<User_accountUpdateManyMutationInput, User_accountUncheckedUpdateManyWithoutUserInput>
  }

  export type User_accountScalarWhereInput = {
    AND?: User_accountScalarWhereInput | User_accountScalarWhereInput[]
    OR?: User_accountScalarWhereInput[]
    NOT?: User_accountScalarWhereInput | User_accountScalarWhereInput[]
    id?: StringFilter<"User_account"> | string
    accountId?: StringFilter<"User_account"> | string
    providerId?: StringFilter<"User_account"> | string
    userId?: StringFilter<"User_account"> | string
    accessToken?: StringNullableFilter<"User_account"> | string | null
    refreshToken?: StringNullableFilter<"User_account"> | string | null
    idToken?: StringNullableFilter<"User_account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"User_account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"User_account"> | Date | string | null
    scope?: StringNullableFilter<"User_account"> | string | null
    password?: StringNullableFilter<"User_account"> | string | null
    createdAt?: DateTimeFilter<"User_account"> | Date | string
    updatedAt?: DateTimeFilter<"User_account"> | Date | string
  }

  export type UserCreateWithoutUser_sessionssInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_accounts?: User_accountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_sessionssInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_accounts?: User_accountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_sessionssInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_sessionssInput, UserUncheckedCreateWithoutUser_sessionssInput>
  }

  export type UserUpsertWithoutUser_sessionssInput = {
    update: XOR<UserUpdateWithoutUser_sessionssInput, UserUncheckedUpdateWithoutUser_sessionssInput>
    create: XOR<UserCreateWithoutUser_sessionssInput, UserUncheckedCreateWithoutUser_sessionssInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_sessionssInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_sessionssInput, UserUncheckedUpdateWithoutUser_sessionssInput>
  }

  export type UserUpdateWithoutUser_sessionssInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_accounts?: User_accountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_sessionssInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_accounts?: User_accountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_accountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_sessionss?: User_sessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_accountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_sessionss?: User_sessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_accountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_accountsInput, UserUncheckedCreateWithoutUser_accountsInput>
  }

  export type UserUpsertWithoutUser_accountsInput = {
    update: XOR<UserUpdateWithoutUser_accountsInput, UserUncheckedUpdateWithoutUser_accountsInput>
    create: XOR<UserCreateWithoutUser_accountsInput, UserUncheckedCreateWithoutUser_accountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_accountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_accountsInput, UserUncheckedUpdateWithoutUser_accountsInput>
  }

  export type UserUpdateWithoutUser_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_sessionss?: User_sessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_sessionss?: User_sessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type User_sessionsCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type User_accountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_sessionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_sessionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_sessionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_accountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_accountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_accountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}