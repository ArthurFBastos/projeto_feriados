
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Feriado
 * 
 */
export type Feriado = $Result.DefaultSelection<Prisma.$FeriadoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Feriados
 * const feriados = await prisma.feriado.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Feriados
   * const feriados = await prisma.feriado.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.feriado`: Exposes CRUD operations for the **Feriado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feriados
    * const feriados = await prisma.feriado.findMany()
    * ```
    */
  get feriado(): Prisma.FeriadoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Feriado: 'Feriado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "feriado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Feriado: {
        payload: Prisma.$FeriadoPayload<ExtArgs>
        fields: Prisma.FeriadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeriadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeriadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          findFirst: {
            args: Prisma.FeriadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeriadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          findMany: {
            args: Prisma.FeriadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>[]
          }
          create: {
            args: Prisma.FeriadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          createMany: {
            args: Prisma.FeriadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeriadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>[]
          }
          delete: {
            args: Prisma.FeriadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          update: {
            args: Prisma.FeriadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          deleteMany: {
            args: Prisma.FeriadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeriadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeriadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>[]
          }
          upsert: {
            args: Prisma.FeriadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriadoPayload>
          }
          aggregate: {
            args: Prisma.FeriadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeriado>
          }
          groupBy: {
            args: Prisma.FeriadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeriadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeriadoCountArgs<ExtArgs>
            result: $Utils.Optional<FeriadoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    feriado?: FeriadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Feriado
   */

  export type AggregateFeriado = {
    _count: FeriadoCountAggregateOutputType | null
    _avg: FeriadoAvgAggregateOutputType | null
    _sum: FeriadoSumAggregateOutputType | null
    _min: FeriadoMinAggregateOutputType | null
    _max: FeriadoMaxAggregateOutputType | null
  }

  export type FeriadoAvgAggregateOutputType = {
    id: number | null
  }

  export type FeriadoSumAggregateOutputType = {
    id: number | null
  }

  export type FeriadoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    nome: string | null
    tipo: string | null
  }

  export type FeriadoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    nome: string | null
    tipo: string | null
  }

  export type FeriadoCountAggregateOutputType = {
    id: number
    data: number
    nome: number
    tipo: number
    _all: number
  }


  export type FeriadoAvgAggregateInputType = {
    id?: true
  }

  export type FeriadoSumAggregateInputType = {
    id?: true
  }

  export type FeriadoMinAggregateInputType = {
    id?: true
    data?: true
    nome?: true
    tipo?: true
  }

  export type FeriadoMaxAggregateInputType = {
    id?: true
    data?: true
    nome?: true
    tipo?: true
  }

  export type FeriadoCountAggregateInputType = {
    id?: true
    data?: true
    nome?: true
    tipo?: true
    _all?: true
  }

  export type FeriadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feriado to aggregate.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feriados
    **/
    _count?: true | FeriadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeriadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeriadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeriadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeriadoMaxAggregateInputType
  }

  export type GetFeriadoAggregateType<T extends FeriadoAggregateArgs> = {
        [P in keyof T & keyof AggregateFeriado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeriado[P]>
      : GetScalarType<T[P], AggregateFeriado[P]>
  }




  export type FeriadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriadoWhereInput
    orderBy?: FeriadoOrderByWithAggregationInput | FeriadoOrderByWithAggregationInput[]
    by: FeriadoScalarFieldEnum[] | FeriadoScalarFieldEnum
    having?: FeriadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeriadoCountAggregateInputType | true
    _avg?: FeriadoAvgAggregateInputType
    _sum?: FeriadoSumAggregateInputType
    _min?: FeriadoMinAggregateInputType
    _max?: FeriadoMaxAggregateInputType
  }

  export type FeriadoGroupByOutputType = {
    id: number
    data: Date
    nome: string
    tipo: string
    _count: FeriadoCountAggregateOutputType | null
    _avg: FeriadoAvgAggregateOutputType | null
    _sum: FeriadoSumAggregateOutputType | null
    _min: FeriadoMinAggregateOutputType | null
    _max: FeriadoMaxAggregateOutputType | null
  }

  type GetFeriadoGroupByPayload<T extends FeriadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeriadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeriadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeriadoGroupByOutputType[P]>
            : GetScalarType<T[P], FeriadoGroupByOutputType[P]>
        }
      >
    >


  export type FeriadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    nome?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["feriado"]>

  export type FeriadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    nome?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["feriado"]>

  export type FeriadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    nome?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["feriado"]>

  export type FeriadoSelectScalar = {
    id?: boolean
    data?: boolean
    nome?: boolean
    tipo?: boolean
  }

  export type FeriadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "nome" | "tipo", ExtArgs["result"]["feriado"]>

  export type $FeriadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feriado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      nome: string
      tipo: string
    }, ExtArgs["result"]["feriado"]>
    composites: {}
  }

  type FeriadoGetPayload<S extends boolean | null | undefined | FeriadoDefaultArgs> = $Result.GetResult<Prisma.$FeriadoPayload, S>

  type FeriadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeriadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeriadoCountAggregateInputType | true
    }

  export interface FeriadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feriado'], meta: { name: 'Feriado' } }
    /**
     * Find zero or one Feriado that matches the filter.
     * @param {FeriadoFindUniqueArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeriadoFindUniqueArgs>(args: SelectSubset<T, FeriadoFindUniqueArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feriado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeriadoFindUniqueOrThrowArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeriadoFindUniqueOrThrowArgs>(args: SelectSubset<T, FeriadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feriado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoFindFirstArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeriadoFindFirstArgs>(args?: SelectSubset<T, FeriadoFindFirstArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feriado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoFindFirstOrThrowArgs} args - Arguments to find a Feriado
     * @example
     * // Get one Feriado
     * const feriado = await prisma.feriado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeriadoFindFirstOrThrowArgs>(args?: SelectSubset<T, FeriadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feriados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feriados
     * const feriados = await prisma.feriado.findMany()
     * 
     * // Get first 10 Feriados
     * const feriados = await prisma.feriado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feriadoWithIdOnly = await prisma.feriado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeriadoFindManyArgs>(args?: SelectSubset<T, FeriadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feriado.
     * @param {FeriadoCreateArgs} args - Arguments to create a Feriado.
     * @example
     * // Create one Feriado
     * const Feriado = await prisma.feriado.create({
     *   data: {
     *     // ... data to create a Feriado
     *   }
     * })
     * 
     */
    create<T extends FeriadoCreateArgs>(args: SelectSubset<T, FeriadoCreateArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feriados.
     * @param {FeriadoCreateManyArgs} args - Arguments to create many Feriados.
     * @example
     * // Create many Feriados
     * const feriado = await prisma.feriado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeriadoCreateManyArgs>(args?: SelectSubset<T, FeriadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feriados and returns the data saved in the database.
     * @param {FeriadoCreateManyAndReturnArgs} args - Arguments to create many Feriados.
     * @example
     * // Create many Feriados
     * const feriado = await prisma.feriado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feriados and only return the `id`
     * const feriadoWithIdOnly = await prisma.feriado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeriadoCreateManyAndReturnArgs>(args?: SelectSubset<T, FeriadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feriado.
     * @param {FeriadoDeleteArgs} args - Arguments to delete one Feriado.
     * @example
     * // Delete one Feriado
     * const Feriado = await prisma.feriado.delete({
     *   where: {
     *     // ... filter to delete one Feriado
     *   }
     * })
     * 
     */
    delete<T extends FeriadoDeleteArgs>(args: SelectSubset<T, FeriadoDeleteArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feriado.
     * @param {FeriadoUpdateArgs} args - Arguments to update one Feriado.
     * @example
     * // Update one Feriado
     * const feriado = await prisma.feriado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeriadoUpdateArgs>(args: SelectSubset<T, FeriadoUpdateArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feriados.
     * @param {FeriadoDeleteManyArgs} args - Arguments to filter Feriados to delete.
     * @example
     * // Delete a few Feriados
     * const { count } = await prisma.feriado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeriadoDeleteManyArgs>(args?: SelectSubset<T, FeriadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feriados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feriados
     * const feriado = await prisma.feriado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeriadoUpdateManyArgs>(args: SelectSubset<T, FeriadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feriados and returns the data updated in the database.
     * @param {FeriadoUpdateManyAndReturnArgs} args - Arguments to update many Feriados.
     * @example
     * // Update many Feriados
     * const feriado = await prisma.feriado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feriados and only return the `id`
     * const feriadoWithIdOnly = await prisma.feriado.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeriadoUpdateManyAndReturnArgs>(args: SelectSubset<T, FeriadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feriado.
     * @param {FeriadoUpsertArgs} args - Arguments to update or create a Feriado.
     * @example
     * // Update or create a Feriado
     * const feriado = await prisma.feriado.upsert({
     *   create: {
     *     // ... data to create a Feriado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feriado we want to update
     *   }
     * })
     */
    upsert<T extends FeriadoUpsertArgs>(args: SelectSubset<T, FeriadoUpsertArgs<ExtArgs>>): Prisma__FeriadoClient<$Result.GetResult<Prisma.$FeriadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feriados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoCountArgs} args - Arguments to filter Feriados to count.
     * @example
     * // Count the number of Feriados
     * const count = await prisma.feriado.count({
     *   where: {
     *     // ... the filter for the Feriados we want to count
     *   }
     * })
    **/
    count<T extends FeriadoCountArgs>(
      args?: Subset<T, FeriadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeriadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feriado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeriadoAggregateArgs>(args: Subset<T, FeriadoAggregateArgs>): Prisma.PrismaPromise<GetFeriadoAggregateType<T>>

    /**
     * Group by Feriado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriadoGroupByArgs} args - Group by arguments.
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
      T extends FeriadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeriadoGroupByArgs['orderBy'] }
        : { orderBy?: FeriadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeriadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeriadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feriado model
   */
  readonly fields: FeriadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feriado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeriadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Feriado model
   */
  interface FeriadoFieldRefs {
    readonly id: FieldRef<"Feriado", 'Int'>
    readonly data: FieldRef<"Feriado", 'DateTime'>
    readonly nome: FieldRef<"Feriado", 'String'>
    readonly tipo: FieldRef<"Feriado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feriado findUnique
   */
  export type FeriadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado findUniqueOrThrow
   */
  export type FeriadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado findFirst
   */
  export type FeriadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feriados.
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feriados.
     */
    distinct?: FeriadoScalarFieldEnum | FeriadoScalarFieldEnum[]
  }

  /**
   * Feriado findFirstOrThrow
   */
  export type FeriadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriado to fetch.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feriados.
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feriados.
     */
    distinct?: FeriadoScalarFieldEnum | FeriadoScalarFieldEnum[]
  }

  /**
   * Feriado findMany
   */
  export type FeriadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter, which Feriados to fetch.
     */
    where?: FeriadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feriados to fetch.
     */
    orderBy?: FeriadoOrderByWithRelationInput | FeriadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feriados.
     */
    cursor?: FeriadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feriados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feriados.
     */
    skip?: number
    distinct?: FeriadoScalarFieldEnum | FeriadoScalarFieldEnum[]
  }

  /**
   * Feriado create
   */
  export type FeriadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data needed to create a Feriado.
     */
    data: XOR<FeriadoCreateInput, FeriadoUncheckedCreateInput>
  }

  /**
   * Feriado createMany
   */
  export type FeriadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feriados.
     */
    data: FeriadoCreateManyInput | FeriadoCreateManyInput[]
  }

  /**
   * Feriado createManyAndReturn
   */
  export type FeriadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data used to create many Feriados.
     */
    data: FeriadoCreateManyInput | FeriadoCreateManyInput[]
  }

  /**
   * Feriado update
   */
  export type FeriadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data needed to update a Feriado.
     */
    data: XOR<FeriadoUpdateInput, FeriadoUncheckedUpdateInput>
    /**
     * Choose, which Feriado to update.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado updateMany
   */
  export type FeriadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feriados.
     */
    data: XOR<FeriadoUpdateManyMutationInput, FeriadoUncheckedUpdateManyInput>
    /**
     * Filter which Feriados to update
     */
    where?: FeriadoWhereInput
    /**
     * Limit how many Feriados to update.
     */
    limit?: number
  }

  /**
   * Feriado updateManyAndReturn
   */
  export type FeriadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The data used to update Feriados.
     */
    data: XOR<FeriadoUpdateManyMutationInput, FeriadoUncheckedUpdateManyInput>
    /**
     * Filter which Feriados to update
     */
    where?: FeriadoWhereInput
    /**
     * Limit how many Feriados to update.
     */
    limit?: number
  }

  /**
   * Feriado upsert
   */
  export type FeriadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * The filter to search for the Feriado to update in case it exists.
     */
    where: FeriadoWhereUniqueInput
    /**
     * In case the Feriado found by the `where` argument doesn't exist, create a new Feriado with this data.
     */
    create: XOR<FeriadoCreateInput, FeriadoUncheckedCreateInput>
    /**
     * In case the Feriado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeriadoUpdateInput, FeriadoUncheckedUpdateInput>
  }

  /**
   * Feriado delete
   */
  export type FeriadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
    /**
     * Filter which Feriado to delete.
     */
    where: FeriadoWhereUniqueInput
  }

  /**
   * Feriado deleteMany
   */
  export type FeriadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feriados to delete
     */
    where?: FeriadoWhereInput
    /**
     * Limit how many Feriados to delete.
     */
    limit?: number
  }

  /**
   * Feriado without action
   */
  export type FeriadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feriado
     */
    select?: FeriadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feriado
     */
    omit?: FeriadoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FeriadoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    nome: 'nome',
    tipo: 'tipo'
  };

  export type FeriadoScalarFieldEnum = (typeof FeriadoScalarFieldEnum)[keyof typeof FeriadoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FeriadoWhereInput = {
    AND?: FeriadoWhereInput | FeriadoWhereInput[]
    OR?: FeriadoWhereInput[]
    NOT?: FeriadoWhereInput | FeriadoWhereInput[]
    id?: IntFilter<"Feriado"> | number
    data?: DateTimeFilter<"Feriado"> | Date | string
    nome?: StringFilter<"Feriado"> | string
    tipo?: StringFilter<"Feriado"> | string
  }

  export type FeriadoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type FeriadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeriadoWhereInput | FeriadoWhereInput[]
    OR?: FeriadoWhereInput[]
    NOT?: FeriadoWhereInput | FeriadoWhereInput[]
    data?: DateTimeFilter<"Feriado"> | Date | string
    nome?: StringFilter<"Feriado"> | string
    tipo?: StringFilter<"Feriado"> | string
  }, "id">

  export type FeriadoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    _count?: FeriadoCountOrderByAggregateInput
    _avg?: FeriadoAvgOrderByAggregateInput
    _max?: FeriadoMaxOrderByAggregateInput
    _min?: FeriadoMinOrderByAggregateInput
    _sum?: FeriadoSumOrderByAggregateInput
  }

  export type FeriadoScalarWhereWithAggregatesInput = {
    AND?: FeriadoScalarWhereWithAggregatesInput | FeriadoScalarWhereWithAggregatesInput[]
    OR?: FeriadoScalarWhereWithAggregatesInput[]
    NOT?: FeriadoScalarWhereWithAggregatesInput | FeriadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feriado"> | number
    data?: DateTimeWithAggregatesFilter<"Feriado"> | Date | string
    nome?: StringWithAggregatesFilter<"Feriado"> | string
    tipo?: StringWithAggregatesFilter<"Feriado"> | string
  }

  export type FeriadoCreateInput = {
    data: Date | string
    nome: string
    tipo: string
  }

  export type FeriadoUncheckedCreateInput = {
    id?: number
    data: Date | string
    nome: string
    tipo: string
  }

  export type FeriadoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FeriadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FeriadoCreateManyInput = {
    id?: number
    data: Date | string
    nome: string
    tipo: string
  }

  export type FeriadoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FeriadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FeriadoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type FeriadoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeriadoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type FeriadoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type FeriadoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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