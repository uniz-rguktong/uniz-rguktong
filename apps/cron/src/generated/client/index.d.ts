
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
 * Model Outpass
 * 
 */
export type Outpass = $Result.DefaultSelection<Prisma.$OutpassPayload>
/**
 * Model Outing
 * 
 */
export type Outing = $Result.DefaultSelection<Prisma.$OutingPayload>
/**
 * Model Grievance
 * 
 */
export type Grievance = $Result.DefaultSelection<Prisma.$GrievancePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Outpasses
 * const outpasses = await prisma.outpass.findMany()
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
   * // Fetch zero or more Outpasses
   * const outpasses = await prisma.outpass.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.outpass`: Exposes CRUD operations for the **Outpass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outpasses
    * const outpasses = await prisma.outpass.findMany()
    * ```
    */
  get outpass(): Prisma.OutpassDelegate<ExtArgs>;

  /**
   * `prisma.outing`: Exposes CRUD operations for the **Outing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outings
    * const outings = await prisma.outing.findMany()
    * ```
    */
  get outing(): Prisma.OutingDelegate<ExtArgs>;

  /**
   * `prisma.grievance`: Exposes CRUD operations for the **Grievance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grievances
    * const grievances = await prisma.grievance.findMany()
    * ```
    */
  get grievance(): Prisma.GrievanceDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Outpass: 'Outpass',
    Outing: 'Outing',
    Grievance: 'Grievance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "outpass" | "outing" | "grievance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Outpass: {
        payload: Prisma.$OutpassPayload<ExtArgs>
        fields: Prisma.OutpassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutpassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutpassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          findFirst: {
            args: Prisma.OutpassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutpassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          findMany: {
            args: Prisma.OutpassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>[]
          }
          create: {
            args: Prisma.OutpassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          createMany: {
            args: Prisma.OutpassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutpassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>[]
          }
          delete: {
            args: Prisma.OutpassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          update: {
            args: Prisma.OutpassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          deleteMany: {
            args: Prisma.OutpassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutpassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutpassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          aggregate: {
            args: Prisma.OutpassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutpass>
          }
          groupBy: {
            args: Prisma.OutpassGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutpassGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutpassCountArgs<ExtArgs>
            result: $Utils.Optional<OutpassCountAggregateOutputType> | number
          }
        }
      }
      Outing: {
        payload: Prisma.$OutingPayload<ExtArgs>
        fields: Prisma.OutingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>
          }
          findFirst: {
            args: Prisma.OutingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>
          }
          findMany: {
            args: Prisma.OutingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>[]
          }
          create: {
            args: Prisma.OutingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>
          }
          createMany: {
            args: Prisma.OutingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>[]
          }
          delete: {
            args: Prisma.OutingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>
          }
          update: {
            args: Prisma.OutingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>
          }
          deleteMany: {
            args: Prisma.OutingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutingPayload>
          }
          aggregate: {
            args: Prisma.OutingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOuting>
          }
          groupBy: {
            args: Prisma.OutingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutingCountArgs<ExtArgs>
            result: $Utils.Optional<OutingCountAggregateOutputType> | number
          }
        }
      }
      Grievance: {
        payload: Prisma.$GrievancePayload<ExtArgs>
        fields: Prisma.GrievanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrievanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrievanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>
          }
          findFirst: {
            args: Prisma.GrievanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrievanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>
          }
          findMany: {
            args: Prisma.GrievanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>[]
          }
          create: {
            args: Prisma.GrievanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>
          }
          createMany: {
            args: Prisma.GrievanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrievanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>[]
          }
          delete: {
            args: Prisma.GrievanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>
          }
          update: {
            args: Prisma.GrievanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>
          }
          deleteMany: {
            args: Prisma.GrievanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrievanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GrievanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrievancePayload>
          }
          aggregate: {
            args: Prisma.GrievanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrievance>
          }
          groupBy: {
            args: Prisma.GrievanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrievanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrievanceCountArgs<ExtArgs>
            result: $Utils.Optional<GrievanceCountAggregateOutputType> | number
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
   * Model Outpass
   */

  export type AggregateOutpass = {
    _count: OutpassCountAggregateOutputType | null
    _avg: OutpassAvgAggregateOutputType | null
    _sum: OutpassSumAggregateOutputType | null
    _min: OutpassMinAggregateOutputType | null
    _max: OutpassMaxAggregateOutputType | null
  }

  export type OutpassAvgAggregateOutputType = {
    days: number | null
  }

  export type OutpassSumAggregateOutputType = {
    days: number | null
  }

  export type OutpassMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentGender: string | null
    reason: string | null
    fromDay: Date | null
    toDay: Date | null
    days: number | null
    requestedTime: Date | null
    isExpired: boolean | null
    isApproved: boolean | null
    isRejected: boolean | null
    issuedBy: string | null
    issuedTime: Date | null
    message: string | null
    rejectedBy: string | null
    rejectedTime: Date | null
    checkedOutTime: Date | null
    checkedInTime: Date | null
    currentLevel: string | null
  }

  export type OutpassMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentGender: string | null
    reason: string | null
    fromDay: Date | null
    toDay: Date | null
    days: number | null
    requestedTime: Date | null
    isExpired: boolean | null
    isApproved: boolean | null
    isRejected: boolean | null
    issuedBy: string | null
    issuedTime: Date | null
    message: string | null
    rejectedBy: string | null
    rejectedTime: Date | null
    checkedOutTime: Date | null
    checkedInTime: Date | null
    currentLevel: string | null
  }

  export type OutpassCountAggregateOutputType = {
    id: number
    studentId: number
    studentGender: number
    reason: number
    fromDay: number
    toDay: number
    days: number
    requestedTime: number
    isExpired: number
    isApproved: number
    isRejected: number
    issuedBy: number
    issuedTime: number
    message: number
    rejectedBy: number
    rejectedTime: number
    checkedOutTime: number
    checkedInTime: number
    currentLevel: number
    approvalLogs: number
    _all: number
  }


  export type OutpassAvgAggregateInputType = {
    days?: true
  }

  export type OutpassSumAggregateInputType = {
    days?: true
  }

  export type OutpassMinAggregateInputType = {
    id?: true
    studentId?: true
    studentGender?: true
    reason?: true
    fromDay?: true
    toDay?: true
    days?: true
    requestedTime?: true
    isExpired?: true
    isApproved?: true
    isRejected?: true
    issuedBy?: true
    issuedTime?: true
    message?: true
    rejectedBy?: true
    rejectedTime?: true
    checkedOutTime?: true
    checkedInTime?: true
    currentLevel?: true
  }

  export type OutpassMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentGender?: true
    reason?: true
    fromDay?: true
    toDay?: true
    days?: true
    requestedTime?: true
    isExpired?: true
    isApproved?: true
    isRejected?: true
    issuedBy?: true
    issuedTime?: true
    message?: true
    rejectedBy?: true
    rejectedTime?: true
    checkedOutTime?: true
    checkedInTime?: true
    currentLevel?: true
  }

  export type OutpassCountAggregateInputType = {
    id?: true
    studentId?: true
    studentGender?: true
    reason?: true
    fromDay?: true
    toDay?: true
    days?: true
    requestedTime?: true
    isExpired?: true
    isApproved?: true
    isRejected?: true
    issuedBy?: true
    issuedTime?: true
    message?: true
    rejectedBy?: true
    rejectedTime?: true
    checkedOutTime?: true
    checkedInTime?: true
    currentLevel?: true
    approvalLogs?: true
    _all?: true
  }

  export type OutpassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outpass to aggregate.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outpasses
    **/
    _count?: true | OutpassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutpassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutpassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutpassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutpassMaxAggregateInputType
  }

  export type GetOutpassAggregateType<T extends OutpassAggregateArgs> = {
        [P in keyof T & keyof AggregateOutpass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutpass[P]>
      : GetScalarType<T[P], AggregateOutpass[P]>
  }




  export type OutpassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutpassWhereInput
    orderBy?: OutpassOrderByWithAggregationInput | OutpassOrderByWithAggregationInput[]
    by: OutpassScalarFieldEnum[] | OutpassScalarFieldEnum
    having?: OutpassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutpassCountAggregateInputType | true
    _avg?: OutpassAvgAggregateInputType
    _sum?: OutpassSumAggregateInputType
    _min?: OutpassMinAggregateInputType
    _max?: OutpassMaxAggregateInputType
  }

  export type OutpassGroupByOutputType = {
    id: string
    studentId: string
    studentGender: string
    reason: string
    fromDay: Date
    toDay: Date
    days: number
    requestedTime: Date
    isExpired: boolean
    isApproved: boolean
    isRejected: boolean
    issuedBy: string
    issuedTime: Date
    message: string | null
    rejectedBy: string
    rejectedTime: Date
    checkedOutTime: Date | null
    checkedInTime: Date | null
    currentLevel: string
    approvalLogs: JsonValue | null
    _count: OutpassCountAggregateOutputType | null
    _avg: OutpassAvgAggregateOutputType | null
    _sum: OutpassSumAggregateOutputType | null
    _min: OutpassMinAggregateOutputType | null
    _max: OutpassMaxAggregateOutputType | null
  }

  type GetOutpassGroupByPayload<T extends OutpassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutpassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutpassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutpassGroupByOutputType[P]>
            : GetScalarType<T[P], OutpassGroupByOutputType[P]>
        }
      >
    >


  export type OutpassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentGender?: boolean
    reason?: boolean
    fromDay?: boolean
    toDay?: boolean
    days?: boolean
    requestedTime?: boolean
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: boolean
    issuedTime?: boolean
    message?: boolean
    rejectedBy?: boolean
    rejectedTime?: boolean
    checkedOutTime?: boolean
    checkedInTime?: boolean
    currentLevel?: boolean
    approvalLogs?: boolean
  }, ExtArgs["result"]["outpass"]>

  export type OutpassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentGender?: boolean
    reason?: boolean
    fromDay?: boolean
    toDay?: boolean
    days?: boolean
    requestedTime?: boolean
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: boolean
    issuedTime?: boolean
    message?: boolean
    rejectedBy?: boolean
    rejectedTime?: boolean
    checkedOutTime?: boolean
    checkedInTime?: boolean
    currentLevel?: boolean
    approvalLogs?: boolean
  }, ExtArgs["result"]["outpass"]>

  export type OutpassSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentGender?: boolean
    reason?: boolean
    fromDay?: boolean
    toDay?: boolean
    days?: boolean
    requestedTime?: boolean
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: boolean
    issuedTime?: boolean
    message?: boolean
    rejectedBy?: boolean
    rejectedTime?: boolean
    checkedOutTime?: boolean
    checkedInTime?: boolean
    currentLevel?: boolean
    approvalLogs?: boolean
  }


  export type $OutpassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outpass"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      studentGender: string
      reason: string
      fromDay: Date
      toDay: Date
      days: number
      requestedTime: Date
      isExpired: boolean
      isApproved: boolean
      isRejected: boolean
      issuedBy: string
      issuedTime: Date
      message: string | null
      rejectedBy: string
      rejectedTime: Date
      checkedOutTime: Date | null
      checkedInTime: Date | null
      currentLevel: string
      approvalLogs: Prisma.JsonValue | null
    }, ExtArgs["result"]["outpass"]>
    composites: {}
  }

  type OutpassGetPayload<S extends boolean | null | undefined | OutpassDefaultArgs> = $Result.GetResult<Prisma.$OutpassPayload, S>

  type OutpassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutpassFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutpassCountAggregateInputType | true
    }

  export interface OutpassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outpass'], meta: { name: 'Outpass' } }
    /**
     * Find zero or one Outpass that matches the filter.
     * @param {OutpassFindUniqueArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutpassFindUniqueArgs>(args: SelectSubset<T, OutpassFindUniqueArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Outpass that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutpassFindUniqueOrThrowArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutpassFindUniqueOrThrowArgs>(args: SelectSubset<T, OutpassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Outpass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassFindFirstArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutpassFindFirstArgs>(args?: SelectSubset<T, OutpassFindFirstArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Outpass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassFindFirstOrThrowArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutpassFindFirstOrThrowArgs>(args?: SelectSubset<T, OutpassFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Outpasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outpasses
     * const outpasses = await prisma.outpass.findMany()
     * 
     * // Get first 10 Outpasses
     * const outpasses = await prisma.outpass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outpassWithIdOnly = await prisma.outpass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutpassFindManyArgs>(args?: SelectSubset<T, OutpassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Outpass.
     * @param {OutpassCreateArgs} args - Arguments to create a Outpass.
     * @example
     * // Create one Outpass
     * const Outpass = await prisma.outpass.create({
     *   data: {
     *     // ... data to create a Outpass
     *   }
     * })
     * 
     */
    create<T extends OutpassCreateArgs>(args: SelectSubset<T, OutpassCreateArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Outpasses.
     * @param {OutpassCreateManyArgs} args - Arguments to create many Outpasses.
     * @example
     * // Create many Outpasses
     * const outpass = await prisma.outpass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutpassCreateManyArgs>(args?: SelectSubset<T, OutpassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outpasses and returns the data saved in the database.
     * @param {OutpassCreateManyAndReturnArgs} args - Arguments to create many Outpasses.
     * @example
     * // Create many Outpasses
     * const outpass = await prisma.outpass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outpasses and only return the `id`
     * const outpassWithIdOnly = await prisma.outpass.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutpassCreateManyAndReturnArgs>(args?: SelectSubset<T, OutpassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Outpass.
     * @param {OutpassDeleteArgs} args - Arguments to delete one Outpass.
     * @example
     * // Delete one Outpass
     * const Outpass = await prisma.outpass.delete({
     *   where: {
     *     // ... filter to delete one Outpass
     *   }
     * })
     * 
     */
    delete<T extends OutpassDeleteArgs>(args: SelectSubset<T, OutpassDeleteArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Outpass.
     * @param {OutpassUpdateArgs} args - Arguments to update one Outpass.
     * @example
     * // Update one Outpass
     * const outpass = await prisma.outpass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutpassUpdateArgs>(args: SelectSubset<T, OutpassUpdateArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Outpasses.
     * @param {OutpassDeleteManyArgs} args - Arguments to filter Outpasses to delete.
     * @example
     * // Delete a few Outpasses
     * const { count } = await prisma.outpass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutpassDeleteManyArgs>(args?: SelectSubset<T, OutpassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outpasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outpasses
     * const outpass = await prisma.outpass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutpassUpdateManyArgs>(args: SelectSubset<T, OutpassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outpass.
     * @param {OutpassUpsertArgs} args - Arguments to update or create a Outpass.
     * @example
     * // Update or create a Outpass
     * const outpass = await prisma.outpass.upsert({
     *   create: {
     *     // ... data to create a Outpass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outpass we want to update
     *   }
     * })
     */
    upsert<T extends OutpassUpsertArgs>(args: SelectSubset<T, OutpassUpsertArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Outpasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassCountArgs} args - Arguments to filter Outpasses to count.
     * @example
     * // Count the number of Outpasses
     * const count = await prisma.outpass.count({
     *   where: {
     *     // ... the filter for the Outpasses we want to count
     *   }
     * })
    **/
    count<T extends OutpassCountArgs>(
      args?: Subset<T, OutpassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutpassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outpass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutpassAggregateArgs>(args: Subset<T, OutpassAggregateArgs>): Prisma.PrismaPromise<GetOutpassAggregateType<T>>

    /**
     * Group by Outpass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassGroupByArgs} args - Group by arguments.
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
      T extends OutpassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutpassGroupByArgs['orderBy'] }
        : { orderBy?: OutpassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutpassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutpassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outpass model
   */
  readonly fields: OutpassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outpass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutpassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Outpass model
   */ 
  interface OutpassFieldRefs {
    readonly id: FieldRef<"Outpass", 'String'>
    readonly studentId: FieldRef<"Outpass", 'String'>
    readonly studentGender: FieldRef<"Outpass", 'String'>
    readonly reason: FieldRef<"Outpass", 'String'>
    readonly fromDay: FieldRef<"Outpass", 'DateTime'>
    readonly toDay: FieldRef<"Outpass", 'DateTime'>
    readonly days: FieldRef<"Outpass", 'Int'>
    readonly requestedTime: FieldRef<"Outpass", 'DateTime'>
    readonly isExpired: FieldRef<"Outpass", 'Boolean'>
    readonly isApproved: FieldRef<"Outpass", 'Boolean'>
    readonly isRejected: FieldRef<"Outpass", 'Boolean'>
    readonly issuedBy: FieldRef<"Outpass", 'String'>
    readonly issuedTime: FieldRef<"Outpass", 'DateTime'>
    readonly message: FieldRef<"Outpass", 'String'>
    readonly rejectedBy: FieldRef<"Outpass", 'String'>
    readonly rejectedTime: FieldRef<"Outpass", 'DateTime'>
    readonly checkedOutTime: FieldRef<"Outpass", 'DateTime'>
    readonly checkedInTime: FieldRef<"Outpass", 'DateTime'>
    readonly currentLevel: FieldRef<"Outpass", 'String'>
    readonly approvalLogs: FieldRef<"Outpass", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Outpass findUnique
   */
  export type OutpassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass findUniqueOrThrow
   */
  export type OutpassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass findFirst
   */
  export type OutpassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outpasses.
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outpasses.
     */
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * Outpass findFirstOrThrow
   */
  export type OutpassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outpasses.
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outpasses.
     */
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * Outpass findMany
   */
  export type OutpassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Filter, which Outpasses to fetch.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outpasses.
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * Outpass create
   */
  export type OutpassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * The data needed to create a Outpass.
     */
    data: XOR<OutpassCreateInput, OutpassUncheckedCreateInput>
  }

  /**
   * Outpass createMany
   */
  export type OutpassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outpasses.
     */
    data: OutpassCreateManyInput | OutpassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outpass createManyAndReturn
   */
  export type OutpassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Outpasses.
     */
    data: OutpassCreateManyInput | OutpassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outpass update
   */
  export type OutpassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * The data needed to update a Outpass.
     */
    data: XOR<OutpassUpdateInput, OutpassUncheckedUpdateInput>
    /**
     * Choose, which Outpass to update.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass updateMany
   */
  export type OutpassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outpasses.
     */
    data: XOR<OutpassUpdateManyMutationInput, OutpassUncheckedUpdateManyInput>
    /**
     * Filter which Outpasses to update
     */
    where?: OutpassWhereInput
  }

  /**
   * Outpass upsert
   */
  export type OutpassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * The filter to search for the Outpass to update in case it exists.
     */
    where: OutpassWhereUniqueInput
    /**
     * In case the Outpass found by the `where` argument doesn't exist, create a new Outpass with this data.
     */
    create: XOR<OutpassCreateInput, OutpassUncheckedCreateInput>
    /**
     * In case the Outpass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutpassUpdateInput, OutpassUncheckedUpdateInput>
  }

  /**
   * Outpass delete
   */
  export type OutpassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Filter which Outpass to delete.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass deleteMany
   */
  export type OutpassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outpasses to delete
     */
    where?: OutpassWhereInput
  }

  /**
   * Outpass without action
   */
  export type OutpassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
  }


  /**
   * Model Outing
   */

  export type AggregateOuting = {
    _count: OutingCountAggregateOutputType | null
    _avg: OutingAvgAggregateOutputType | null
    _sum: OutingSumAggregateOutputType | null
    _min: OutingMinAggregateOutputType | null
    _max: OutingMaxAggregateOutputType | null
  }

  export type OutingAvgAggregateOutputType = {
    hours: number | null
  }

  export type OutingSumAggregateOutputType = {
    hours: number | null
  }

  export type OutingMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentGender: string | null
    reason: string | null
    fromTime: Date | null
    toTime: Date | null
    hours: number | null
    requestedTime: Date | null
    isExpired: boolean | null
    isApproved: boolean | null
    isRejected: boolean | null
    issuedBy: string | null
    issuedTime: Date | null
    message: string | null
    rejectedBy: string | null
    rejectedTime: Date | null
    checkedOutTime: Date | null
    checkedInTime: Date | null
    currentLevel: string | null
  }

  export type OutingMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentGender: string | null
    reason: string | null
    fromTime: Date | null
    toTime: Date | null
    hours: number | null
    requestedTime: Date | null
    isExpired: boolean | null
    isApproved: boolean | null
    isRejected: boolean | null
    issuedBy: string | null
    issuedTime: Date | null
    message: string | null
    rejectedBy: string | null
    rejectedTime: Date | null
    checkedOutTime: Date | null
    checkedInTime: Date | null
    currentLevel: string | null
  }

  export type OutingCountAggregateOutputType = {
    id: number
    studentId: number
    studentGender: number
    reason: number
    fromTime: number
    toTime: number
    hours: number
    requestedTime: number
    isExpired: number
    isApproved: number
    isRejected: number
    issuedBy: number
    issuedTime: number
    message: number
    rejectedBy: number
    rejectedTime: number
    checkedOutTime: number
    checkedInTime: number
    currentLevel: number
    approvalLogs: number
    _all: number
  }


  export type OutingAvgAggregateInputType = {
    hours?: true
  }

  export type OutingSumAggregateInputType = {
    hours?: true
  }

  export type OutingMinAggregateInputType = {
    id?: true
    studentId?: true
    studentGender?: true
    reason?: true
    fromTime?: true
    toTime?: true
    hours?: true
    requestedTime?: true
    isExpired?: true
    isApproved?: true
    isRejected?: true
    issuedBy?: true
    issuedTime?: true
    message?: true
    rejectedBy?: true
    rejectedTime?: true
    checkedOutTime?: true
    checkedInTime?: true
    currentLevel?: true
  }

  export type OutingMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentGender?: true
    reason?: true
    fromTime?: true
    toTime?: true
    hours?: true
    requestedTime?: true
    isExpired?: true
    isApproved?: true
    isRejected?: true
    issuedBy?: true
    issuedTime?: true
    message?: true
    rejectedBy?: true
    rejectedTime?: true
    checkedOutTime?: true
    checkedInTime?: true
    currentLevel?: true
  }

  export type OutingCountAggregateInputType = {
    id?: true
    studentId?: true
    studentGender?: true
    reason?: true
    fromTime?: true
    toTime?: true
    hours?: true
    requestedTime?: true
    isExpired?: true
    isApproved?: true
    isRejected?: true
    issuedBy?: true
    issuedTime?: true
    message?: true
    rejectedBy?: true
    rejectedTime?: true
    checkedOutTime?: true
    checkedInTime?: true
    currentLevel?: true
    approvalLogs?: true
    _all?: true
  }

  export type OutingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outing to aggregate.
     */
    where?: OutingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outings to fetch.
     */
    orderBy?: OutingOrderByWithRelationInput | OutingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outings
    **/
    _count?: true | OutingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutingMaxAggregateInputType
  }

  export type GetOutingAggregateType<T extends OutingAggregateArgs> = {
        [P in keyof T & keyof AggregateOuting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOuting[P]>
      : GetScalarType<T[P], AggregateOuting[P]>
  }




  export type OutingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutingWhereInput
    orderBy?: OutingOrderByWithAggregationInput | OutingOrderByWithAggregationInput[]
    by: OutingScalarFieldEnum[] | OutingScalarFieldEnum
    having?: OutingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutingCountAggregateInputType | true
    _avg?: OutingAvgAggregateInputType
    _sum?: OutingSumAggregateInputType
    _min?: OutingMinAggregateInputType
    _max?: OutingMaxAggregateInputType
  }

  export type OutingGroupByOutputType = {
    id: string
    studentId: string
    studentGender: string
    reason: string
    fromTime: Date
    toTime: Date
    hours: number
    requestedTime: Date
    isExpired: boolean
    isApproved: boolean
    isRejected: boolean
    issuedBy: string
    issuedTime: Date
    message: string | null
    rejectedBy: string
    rejectedTime: Date
    checkedOutTime: Date | null
    checkedInTime: Date | null
    currentLevel: string
    approvalLogs: JsonValue | null
    _count: OutingCountAggregateOutputType | null
    _avg: OutingAvgAggregateOutputType | null
    _sum: OutingSumAggregateOutputType | null
    _min: OutingMinAggregateOutputType | null
    _max: OutingMaxAggregateOutputType | null
  }

  type GetOutingGroupByPayload<T extends OutingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutingGroupByOutputType[P]>
            : GetScalarType<T[P], OutingGroupByOutputType[P]>
        }
      >
    >


  export type OutingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentGender?: boolean
    reason?: boolean
    fromTime?: boolean
    toTime?: boolean
    hours?: boolean
    requestedTime?: boolean
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: boolean
    issuedTime?: boolean
    message?: boolean
    rejectedBy?: boolean
    rejectedTime?: boolean
    checkedOutTime?: boolean
    checkedInTime?: boolean
    currentLevel?: boolean
    approvalLogs?: boolean
  }, ExtArgs["result"]["outing"]>

  export type OutingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentGender?: boolean
    reason?: boolean
    fromTime?: boolean
    toTime?: boolean
    hours?: boolean
    requestedTime?: boolean
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: boolean
    issuedTime?: boolean
    message?: boolean
    rejectedBy?: boolean
    rejectedTime?: boolean
    checkedOutTime?: boolean
    checkedInTime?: boolean
    currentLevel?: boolean
    approvalLogs?: boolean
  }, ExtArgs["result"]["outing"]>

  export type OutingSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentGender?: boolean
    reason?: boolean
    fromTime?: boolean
    toTime?: boolean
    hours?: boolean
    requestedTime?: boolean
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: boolean
    issuedTime?: boolean
    message?: boolean
    rejectedBy?: boolean
    rejectedTime?: boolean
    checkedOutTime?: boolean
    checkedInTime?: boolean
    currentLevel?: boolean
    approvalLogs?: boolean
  }


  export type $OutingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      studentGender: string
      reason: string
      fromTime: Date
      toTime: Date
      hours: number
      requestedTime: Date
      isExpired: boolean
      isApproved: boolean
      isRejected: boolean
      issuedBy: string
      issuedTime: Date
      message: string | null
      rejectedBy: string
      rejectedTime: Date
      checkedOutTime: Date | null
      checkedInTime: Date | null
      currentLevel: string
      approvalLogs: Prisma.JsonValue | null
    }, ExtArgs["result"]["outing"]>
    composites: {}
  }

  type OutingGetPayload<S extends boolean | null | undefined | OutingDefaultArgs> = $Result.GetResult<Prisma.$OutingPayload, S>

  type OutingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutingCountAggregateInputType | true
    }

  export interface OutingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outing'], meta: { name: 'Outing' } }
    /**
     * Find zero or one Outing that matches the filter.
     * @param {OutingFindUniqueArgs} args - Arguments to find a Outing
     * @example
     * // Get one Outing
     * const outing = await prisma.outing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutingFindUniqueArgs>(args: SelectSubset<T, OutingFindUniqueArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Outing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutingFindUniqueOrThrowArgs} args - Arguments to find a Outing
     * @example
     * // Get one Outing
     * const outing = await prisma.outing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutingFindUniqueOrThrowArgs>(args: SelectSubset<T, OutingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Outing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutingFindFirstArgs} args - Arguments to find a Outing
     * @example
     * // Get one Outing
     * const outing = await prisma.outing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutingFindFirstArgs>(args?: SelectSubset<T, OutingFindFirstArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Outing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutingFindFirstOrThrowArgs} args - Arguments to find a Outing
     * @example
     * // Get one Outing
     * const outing = await prisma.outing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutingFindFirstOrThrowArgs>(args?: SelectSubset<T, OutingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Outings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outings
     * const outings = await prisma.outing.findMany()
     * 
     * // Get first 10 Outings
     * const outings = await prisma.outing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outingWithIdOnly = await prisma.outing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutingFindManyArgs>(args?: SelectSubset<T, OutingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Outing.
     * @param {OutingCreateArgs} args - Arguments to create a Outing.
     * @example
     * // Create one Outing
     * const Outing = await prisma.outing.create({
     *   data: {
     *     // ... data to create a Outing
     *   }
     * })
     * 
     */
    create<T extends OutingCreateArgs>(args: SelectSubset<T, OutingCreateArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Outings.
     * @param {OutingCreateManyArgs} args - Arguments to create many Outings.
     * @example
     * // Create many Outings
     * const outing = await prisma.outing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutingCreateManyArgs>(args?: SelectSubset<T, OutingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outings and returns the data saved in the database.
     * @param {OutingCreateManyAndReturnArgs} args - Arguments to create many Outings.
     * @example
     * // Create many Outings
     * const outing = await prisma.outing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outings and only return the `id`
     * const outingWithIdOnly = await prisma.outing.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutingCreateManyAndReturnArgs>(args?: SelectSubset<T, OutingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Outing.
     * @param {OutingDeleteArgs} args - Arguments to delete one Outing.
     * @example
     * // Delete one Outing
     * const Outing = await prisma.outing.delete({
     *   where: {
     *     // ... filter to delete one Outing
     *   }
     * })
     * 
     */
    delete<T extends OutingDeleteArgs>(args: SelectSubset<T, OutingDeleteArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Outing.
     * @param {OutingUpdateArgs} args - Arguments to update one Outing.
     * @example
     * // Update one Outing
     * const outing = await prisma.outing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutingUpdateArgs>(args: SelectSubset<T, OutingUpdateArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Outings.
     * @param {OutingDeleteManyArgs} args - Arguments to filter Outings to delete.
     * @example
     * // Delete a few Outings
     * const { count } = await prisma.outing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutingDeleteManyArgs>(args?: SelectSubset<T, OutingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outings
     * const outing = await prisma.outing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutingUpdateManyArgs>(args: SelectSubset<T, OutingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outing.
     * @param {OutingUpsertArgs} args - Arguments to update or create a Outing.
     * @example
     * // Update or create a Outing
     * const outing = await prisma.outing.upsert({
     *   create: {
     *     // ... data to create a Outing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outing we want to update
     *   }
     * })
     */
    upsert<T extends OutingUpsertArgs>(args: SelectSubset<T, OutingUpsertArgs<ExtArgs>>): Prisma__OutingClient<$Result.GetResult<Prisma.$OutingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Outings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutingCountArgs} args - Arguments to filter Outings to count.
     * @example
     * // Count the number of Outings
     * const count = await prisma.outing.count({
     *   where: {
     *     // ... the filter for the Outings we want to count
     *   }
     * })
    **/
    count<T extends OutingCountArgs>(
      args?: Subset<T, OutingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutingAggregateArgs>(args: Subset<T, OutingAggregateArgs>): Prisma.PrismaPromise<GetOutingAggregateType<T>>

    /**
     * Group by Outing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutingGroupByArgs} args - Group by arguments.
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
      T extends OutingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutingGroupByArgs['orderBy'] }
        : { orderBy?: OutingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outing model
   */
  readonly fields: OutingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Outing model
   */ 
  interface OutingFieldRefs {
    readonly id: FieldRef<"Outing", 'String'>
    readonly studentId: FieldRef<"Outing", 'String'>
    readonly studentGender: FieldRef<"Outing", 'String'>
    readonly reason: FieldRef<"Outing", 'String'>
    readonly fromTime: FieldRef<"Outing", 'DateTime'>
    readonly toTime: FieldRef<"Outing", 'DateTime'>
    readonly hours: FieldRef<"Outing", 'Int'>
    readonly requestedTime: FieldRef<"Outing", 'DateTime'>
    readonly isExpired: FieldRef<"Outing", 'Boolean'>
    readonly isApproved: FieldRef<"Outing", 'Boolean'>
    readonly isRejected: FieldRef<"Outing", 'Boolean'>
    readonly issuedBy: FieldRef<"Outing", 'String'>
    readonly issuedTime: FieldRef<"Outing", 'DateTime'>
    readonly message: FieldRef<"Outing", 'String'>
    readonly rejectedBy: FieldRef<"Outing", 'String'>
    readonly rejectedTime: FieldRef<"Outing", 'DateTime'>
    readonly checkedOutTime: FieldRef<"Outing", 'DateTime'>
    readonly checkedInTime: FieldRef<"Outing", 'DateTime'>
    readonly currentLevel: FieldRef<"Outing", 'String'>
    readonly approvalLogs: FieldRef<"Outing", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Outing findUnique
   */
  export type OutingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * Filter, which Outing to fetch.
     */
    where: OutingWhereUniqueInput
  }

  /**
   * Outing findUniqueOrThrow
   */
  export type OutingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * Filter, which Outing to fetch.
     */
    where: OutingWhereUniqueInput
  }

  /**
   * Outing findFirst
   */
  export type OutingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * Filter, which Outing to fetch.
     */
    where?: OutingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outings to fetch.
     */
    orderBy?: OutingOrderByWithRelationInput | OutingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outings.
     */
    cursor?: OutingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outings.
     */
    distinct?: OutingScalarFieldEnum | OutingScalarFieldEnum[]
  }

  /**
   * Outing findFirstOrThrow
   */
  export type OutingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * Filter, which Outing to fetch.
     */
    where?: OutingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outings to fetch.
     */
    orderBy?: OutingOrderByWithRelationInput | OutingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outings.
     */
    cursor?: OutingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outings.
     */
    distinct?: OutingScalarFieldEnum | OutingScalarFieldEnum[]
  }

  /**
   * Outing findMany
   */
  export type OutingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * Filter, which Outings to fetch.
     */
    where?: OutingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outings to fetch.
     */
    orderBy?: OutingOrderByWithRelationInput | OutingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outings.
     */
    cursor?: OutingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outings.
     */
    skip?: number
    distinct?: OutingScalarFieldEnum | OutingScalarFieldEnum[]
  }

  /**
   * Outing create
   */
  export type OutingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * The data needed to create a Outing.
     */
    data: XOR<OutingCreateInput, OutingUncheckedCreateInput>
  }

  /**
   * Outing createMany
   */
  export type OutingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outings.
     */
    data: OutingCreateManyInput | OutingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outing createManyAndReturn
   */
  export type OutingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Outings.
     */
    data: OutingCreateManyInput | OutingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outing update
   */
  export type OutingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * The data needed to update a Outing.
     */
    data: XOR<OutingUpdateInput, OutingUncheckedUpdateInput>
    /**
     * Choose, which Outing to update.
     */
    where: OutingWhereUniqueInput
  }

  /**
   * Outing updateMany
   */
  export type OutingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outings.
     */
    data: XOR<OutingUpdateManyMutationInput, OutingUncheckedUpdateManyInput>
    /**
     * Filter which Outings to update
     */
    where?: OutingWhereInput
  }

  /**
   * Outing upsert
   */
  export type OutingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * The filter to search for the Outing to update in case it exists.
     */
    where: OutingWhereUniqueInput
    /**
     * In case the Outing found by the `where` argument doesn't exist, create a new Outing with this data.
     */
    create: XOR<OutingCreateInput, OutingUncheckedCreateInput>
    /**
     * In case the Outing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutingUpdateInput, OutingUncheckedUpdateInput>
  }

  /**
   * Outing delete
   */
  export type OutingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
    /**
     * Filter which Outing to delete.
     */
    where: OutingWhereUniqueInput
  }

  /**
   * Outing deleteMany
   */
  export type OutingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outings to delete
     */
    where?: OutingWhereInput
  }

  /**
   * Outing without action
   */
  export type OutingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outing
     */
    select?: OutingSelect<ExtArgs> | null
  }


  /**
   * Model Grievance
   */

  export type AggregateGrievance = {
    _count: GrievanceCountAggregateOutputType | null
    _min: GrievanceMinAggregateOutputType | null
    _max: GrievanceMaxAggregateOutputType | null
  }

  export type GrievanceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentEmail: string | null
    category: string | null
    description: string | null
    isAnonymous: boolean | null
    status: string | null
    resolvedBy: string | null
    resolution: string | null
    resolvedAt: Date | null
    createdAt: Date | null
  }

  export type GrievanceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentEmail: string | null
    category: string | null
    description: string | null
    isAnonymous: boolean | null
    status: string | null
    resolvedBy: string | null
    resolution: string | null
    resolvedAt: Date | null
    createdAt: Date | null
  }

  export type GrievanceCountAggregateOutputType = {
    id: number
    studentId: number
    studentEmail: number
    category: number
    description: number
    isAnonymous: number
    status: number
    resolvedBy: number
    resolution: number
    resolvedAt: number
    createdAt: number
    _all: number
  }


  export type GrievanceMinAggregateInputType = {
    id?: true
    studentId?: true
    studentEmail?: true
    category?: true
    description?: true
    isAnonymous?: true
    status?: true
    resolvedBy?: true
    resolution?: true
    resolvedAt?: true
    createdAt?: true
  }

  export type GrievanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentEmail?: true
    category?: true
    description?: true
    isAnonymous?: true
    status?: true
    resolvedBy?: true
    resolution?: true
    resolvedAt?: true
    createdAt?: true
  }

  export type GrievanceCountAggregateInputType = {
    id?: true
    studentId?: true
    studentEmail?: true
    category?: true
    description?: true
    isAnonymous?: true
    status?: true
    resolvedBy?: true
    resolution?: true
    resolvedAt?: true
    createdAt?: true
    _all?: true
  }

  export type GrievanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grievance to aggregate.
     */
    where?: GrievanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grievances to fetch.
     */
    orderBy?: GrievanceOrderByWithRelationInput | GrievanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrievanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grievances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grievances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grievances
    **/
    _count?: true | GrievanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrievanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrievanceMaxAggregateInputType
  }

  export type GetGrievanceAggregateType<T extends GrievanceAggregateArgs> = {
        [P in keyof T & keyof AggregateGrievance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrievance[P]>
      : GetScalarType<T[P], AggregateGrievance[P]>
  }




  export type GrievanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrievanceWhereInput
    orderBy?: GrievanceOrderByWithAggregationInput | GrievanceOrderByWithAggregationInput[]
    by: GrievanceScalarFieldEnum[] | GrievanceScalarFieldEnum
    having?: GrievanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrievanceCountAggregateInputType | true
    _min?: GrievanceMinAggregateInputType
    _max?: GrievanceMaxAggregateInputType
  }

  export type GrievanceGroupByOutputType = {
    id: string
    studentId: string | null
    studentEmail: string | null
    category: string
    description: string
    isAnonymous: boolean
    status: string
    resolvedBy: string | null
    resolution: string | null
    resolvedAt: Date | null
    createdAt: Date
    _count: GrievanceCountAggregateOutputType | null
    _min: GrievanceMinAggregateOutputType | null
    _max: GrievanceMaxAggregateOutputType | null
  }

  type GetGrievanceGroupByPayload<T extends GrievanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrievanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrievanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrievanceGroupByOutputType[P]>
            : GetScalarType<T[P], GrievanceGroupByOutputType[P]>
        }
      >
    >


  export type GrievanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentEmail?: boolean
    category?: boolean
    description?: boolean
    isAnonymous?: boolean
    status?: boolean
    resolvedBy?: boolean
    resolution?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["grievance"]>

  export type GrievanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentEmail?: boolean
    category?: boolean
    description?: boolean
    isAnonymous?: boolean
    status?: boolean
    resolvedBy?: boolean
    resolution?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["grievance"]>

  export type GrievanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentEmail?: boolean
    category?: boolean
    description?: boolean
    isAnonymous?: boolean
    status?: boolean
    resolvedBy?: boolean
    resolution?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
  }


  export type $GrievancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grievance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string | null
      studentEmail: string | null
      category: string
      description: string
      isAnonymous: boolean
      status: string
      resolvedBy: string | null
      resolution: string | null
      resolvedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["grievance"]>
    composites: {}
  }

  type GrievanceGetPayload<S extends boolean | null | undefined | GrievanceDefaultArgs> = $Result.GetResult<Prisma.$GrievancePayload, S>

  type GrievanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GrievanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GrievanceCountAggregateInputType | true
    }

  export interface GrievanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grievance'], meta: { name: 'Grievance' } }
    /**
     * Find zero or one Grievance that matches the filter.
     * @param {GrievanceFindUniqueArgs} args - Arguments to find a Grievance
     * @example
     * // Get one Grievance
     * const grievance = await prisma.grievance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrievanceFindUniqueArgs>(args: SelectSubset<T, GrievanceFindUniqueArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Grievance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GrievanceFindUniqueOrThrowArgs} args - Arguments to find a Grievance
     * @example
     * // Get one Grievance
     * const grievance = await prisma.grievance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrievanceFindUniqueOrThrowArgs>(args: SelectSubset<T, GrievanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Grievance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrievanceFindFirstArgs} args - Arguments to find a Grievance
     * @example
     * // Get one Grievance
     * const grievance = await prisma.grievance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrievanceFindFirstArgs>(args?: SelectSubset<T, GrievanceFindFirstArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Grievance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrievanceFindFirstOrThrowArgs} args - Arguments to find a Grievance
     * @example
     * // Get one Grievance
     * const grievance = await prisma.grievance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrievanceFindFirstOrThrowArgs>(args?: SelectSubset<T, GrievanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Grievances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrievanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grievances
     * const grievances = await prisma.grievance.findMany()
     * 
     * // Get first 10 Grievances
     * const grievances = await prisma.grievance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grievanceWithIdOnly = await prisma.grievance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrievanceFindManyArgs>(args?: SelectSubset<T, GrievanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Grievance.
     * @param {GrievanceCreateArgs} args - Arguments to create a Grievance.
     * @example
     * // Create one Grievance
     * const Grievance = await prisma.grievance.create({
     *   data: {
     *     // ... data to create a Grievance
     *   }
     * })
     * 
     */
    create<T extends GrievanceCreateArgs>(args: SelectSubset<T, GrievanceCreateArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Grievances.
     * @param {GrievanceCreateManyArgs} args - Arguments to create many Grievances.
     * @example
     * // Create many Grievances
     * const grievance = await prisma.grievance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrievanceCreateManyArgs>(args?: SelectSubset<T, GrievanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grievances and returns the data saved in the database.
     * @param {GrievanceCreateManyAndReturnArgs} args - Arguments to create many Grievances.
     * @example
     * // Create many Grievances
     * const grievance = await prisma.grievance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grievances and only return the `id`
     * const grievanceWithIdOnly = await prisma.grievance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrievanceCreateManyAndReturnArgs>(args?: SelectSubset<T, GrievanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Grievance.
     * @param {GrievanceDeleteArgs} args - Arguments to delete one Grievance.
     * @example
     * // Delete one Grievance
     * const Grievance = await prisma.grievance.delete({
     *   where: {
     *     // ... filter to delete one Grievance
     *   }
     * })
     * 
     */
    delete<T extends GrievanceDeleteArgs>(args: SelectSubset<T, GrievanceDeleteArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Grievance.
     * @param {GrievanceUpdateArgs} args - Arguments to update one Grievance.
     * @example
     * // Update one Grievance
     * const grievance = await prisma.grievance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrievanceUpdateArgs>(args: SelectSubset<T, GrievanceUpdateArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Grievances.
     * @param {GrievanceDeleteManyArgs} args - Arguments to filter Grievances to delete.
     * @example
     * // Delete a few Grievances
     * const { count } = await prisma.grievance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrievanceDeleteManyArgs>(args?: SelectSubset<T, GrievanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grievances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrievanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grievances
     * const grievance = await prisma.grievance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrievanceUpdateManyArgs>(args: SelectSubset<T, GrievanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grievance.
     * @param {GrievanceUpsertArgs} args - Arguments to update or create a Grievance.
     * @example
     * // Update or create a Grievance
     * const grievance = await prisma.grievance.upsert({
     *   create: {
     *     // ... data to create a Grievance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grievance we want to update
     *   }
     * })
     */
    upsert<T extends GrievanceUpsertArgs>(args: SelectSubset<T, GrievanceUpsertArgs<ExtArgs>>): Prisma__GrievanceClient<$Result.GetResult<Prisma.$GrievancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Grievances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrievanceCountArgs} args - Arguments to filter Grievances to count.
     * @example
     * // Count the number of Grievances
     * const count = await prisma.grievance.count({
     *   where: {
     *     // ... the filter for the Grievances we want to count
     *   }
     * })
    **/
    count<T extends GrievanceCountArgs>(
      args?: Subset<T, GrievanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrievanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grievance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrievanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrievanceAggregateArgs>(args: Subset<T, GrievanceAggregateArgs>): Prisma.PrismaPromise<GetGrievanceAggregateType<T>>

    /**
     * Group by Grievance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrievanceGroupByArgs} args - Group by arguments.
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
      T extends GrievanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrievanceGroupByArgs['orderBy'] }
        : { orderBy?: GrievanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrievanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrievanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grievance model
   */
  readonly fields: GrievanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grievance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrievanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Grievance model
   */ 
  interface GrievanceFieldRefs {
    readonly id: FieldRef<"Grievance", 'String'>
    readonly studentId: FieldRef<"Grievance", 'String'>
    readonly studentEmail: FieldRef<"Grievance", 'String'>
    readonly category: FieldRef<"Grievance", 'String'>
    readonly description: FieldRef<"Grievance", 'String'>
    readonly isAnonymous: FieldRef<"Grievance", 'Boolean'>
    readonly status: FieldRef<"Grievance", 'String'>
    readonly resolvedBy: FieldRef<"Grievance", 'String'>
    readonly resolution: FieldRef<"Grievance", 'String'>
    readonly resolvedAt: FieldRef<"Grievance", 'DateTime'>
    readonly createdAt: FieldRef<"Grievance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grievance findUnique
   */
  export type GrievanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * Filter, which Grievance to fetch.
     */
    where: GrievanceWhereUniqueInput
  }

  /**
   * Grievance findUniqueOrThrow
   */
  export type GrievanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * Filter, which Grievance to fetch.
     */
    where: GrievanceWhereUniqueInput
  }

  /**
   * Grievance findFirst
   */
  export type GrievanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * Filter, which Grievance to fetch.
     */
    where?: GrievanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grievances to fetch.
     */
    orderBy?: GrievanceOrderByWithRelationInput | GrievanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grievances.
     */
    cursor?: GrievanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grievances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grievances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grievances.
     */
    distinct?: GrievanceScalarFieldEnum | GrievanceScalarFieldEnum[]
  }

  /**
   * Grievance findFirstOrThrow
   */
  export type GrievanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * Filter, which Grievance to fetch.
     */
    where?: GrievanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grievances to fetch.
     */
    orderBy?: GrievanceOrderByWithRelationInput | GrievanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grievances.
     */
    cursor?: GrievanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grievances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grievances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grievances.
     */
    distinct?: GrievanceScalarFieldEnum | GrievanceScalarFieldEnum[]
  }

  /**
   * Grievance findMany
   */
  export type GrievanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * Filter, which Grievances to fetch.
     */
    where?: GrievanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grievances to fetch.
     */
    orderBy?: GrievanceOrderByWithRelationInput | GrievanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grievances.
     */
    cursor?: GrievanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grievances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grievances.
     */
    skip?: number
    distinct?: GrievanceScalarFieldEnum | GrievanceScalarFieldEnum[]
  }

  /**
   * Grievance create
   */
  export type GrievanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * The data needed to create a Grievance.
     */
    data: XOR<GrievanceCreateInput, GrievanceUncheckedCreateInput>
  }

  /**
   * Grievance createMany
   */
  export type GrievanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grievances.
     */
    data: GrievanceCreateManyInput | GrievanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grievance createManyAndReturn
   */
  export type GrievanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Grievances.
     */
    data: GrievanceCreateManyInput | GrievanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grievance update
   */
  export type GrievanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * The data needed to update a Grievance.
     */
    data: XOR<GrievanceUpdateInput, GrievanceUncheckedUpdateInput>
    /**
     * Choose, which Grievance to update.
     */
    where: GrievanceWhereUniqueInput
  }

  /**
   * Grievance updateMany
   */
  export type GrievanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grievances.
     */
    data: XOR<GrievanceUpdateManyMutationInput, GrievanceUncheckedUpdateManyInput>
    /**
     * Filter which Grievances to update
     */
    where?: GrievanceWhereInput
  }

  /**
   * Grievance upsert
   */
  export type GrievanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * The filter to search for the Grievance to update in case it exists.
     */
    where: GrievanceWhereUniqueInput
    /**
     * In case the Grievance found by the `where` argument doesn't exist, create a new Grievance with this data.
     */
    create: XOR<GrievanceCreateInput, GrievanceUncheckedCreateInput>
    /**
     * In case the Grievance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrievanceUpdateInput, GrievanceUncheckedUpdateInput>
  }

  /**
   * Grievance delete
   */
  export type GrievanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
    /**
     * Filter which Grievance to delete.
     */
    where: GrievanceWhereUniqueInput
  }

  /**
   * Grievance deleteMany
   */
  export type GrievanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grievances to delete
     */
    where?: GrievanceWhereInput
  }

  /**
   * Grievance without action
   */
  export type GrievanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grievance
     */
    select?: GrievanceSelect<ExtArgs> | null
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


  export const OutpassScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentGender: 'studentGender',
    reason: 'reason',
    fromDay: 'fromDay',
    toDay: 'toDay',
    days: 'days',
    requestedTime: 'requestedTime',
    isExpired: 'isExpired',
    isApproved: 'isApproved',
    isRejected: 'isRejected',
    issuedBy: 'issuedBy',
    issuedTime: 'issuedTime',
    message: 'message',
    rejectedBy: 'rejectedBy',
    rejectedTime: 'rejectedTime',
    checkedOutTime: 'checkedOutTime',
    checkedInTime: 'checkedInTime',
    currentLevel: 'currentLevel',
    approvalLogs: 'approvalLogs'
  };

  export type OutpassScalarFieldEnum = (typeof OutpassScalarFieldEnum)[keyof typeof OutpassScalarFieldEnum]


  export const OutingScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentGender: 'studentGender',
    reason: 'reason',
    fromTime: 'fromTime',
    toTime: 'toTime',
    hours: 'hours',
    requestedTime: 'requestedTime',
    isExpired: 'isExpired',
    isApproved: 'isApproved',
    isRejected: 'isRejected',
    issuedBy: 'issuedBy',
    issuedTime: 'issuedTime',
    message: 'message',
    rejectedBy: 'rejectedBy',
    rejectedTime: 'rejectedTime',
    checkedOutTime: 'checkedOutTime',
    checkedInTime: 'checkedInTime',
    currentLevel: 'currentLevel',
    approvalLogs: 'approvalLogs'
  };

  export type OutingScalarFieldEnum = (typeof OutingScalarFieldEnum)[keyof typeof OutingScalarFieldEnum]


  export const GrievanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentEmail: 'studentEmail',
    category: 'category',
    description: 'description',
    isAnonymous: 'isAnonymous',
    status: 'status',
    resolvedBy: 'resolvedBy',
    resolution: 'resolution',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt'
  };

  export type GrievanceScalarFieldEnum = (typeof GrievanceScalarFieldEnum)[keyof typeof GrievanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type OutpassWhereInput = {
    AND?: OutpassWhereInput | OutpassWhereInput[]
    OR?: OutpassWhereInput[]
    NOT?: OutpassWhereInput | OutpassWhereInput[]
    id?: StringFilter<"Outpass"> | string
    studentId?: StringFilter<"Outpass"> | string
    studentGender?: StringFilter<"Outpass"> | string
    reason?: StringFilter<"Outpass"> | string
    fromDay?: DateTimeFilter<"Outpass"> | Date | string
    toDay?: DateTimeFilter<"Outpass"> | Date | string
    days?: IntFilter<"Outpass"> | number
    requestedTime?: DateTimeFilter<"Outpass"> | Date | string
    isExpired?: BoolFilter<"Outpass"> | boolean
    isApproved?: BoolFilter<"Outpass"> | boolean
    isRejected?: BoolFilter<"Outpass"> | boolean
    issuedBy?: StringFilter<"Outpass"> | string
    issuedTime?: DateTimeFilter<"Outpass"> | Date | string
    message?: StringNullableFilter<"Outpass"> | string | null
    rejectedBy?: StringFilter<"Outpass"> | string
    rejectedTime?: DateTimeFilter<"Outpass"> | Date | string
    checkedOutTime?: DateTimeNullableFilter<"Outpass"> | Date | string | null
    checkedInTime?: DateTimeNullableFilter<"Outpass"> | Date | string | null
    currentLevel?: StringFilter<"Outpass"> | string
    approvalLogs?: JsonNullableFilter<"Outpass">
  }

  export type OutpassOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromDay?: SortOrder
    toDay?: SortOrder
    days?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrderInput | SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrderInput | SortOrder
    checkedInTime?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    approvalLogs?: SortOrderInput | SortOrder
  }

  export type OutpassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutpassWhereInput | OutpassWhereInput[]
    OR?: OutpassWhereInput[]
    NOT?: OutpassWhereInput | OutpassWhereInput[]
    studentId?: StringFilter<"Outpass"> | string
    studentGender?: StringFilter<"Outpass"> | string
    reason?: StringFilter<"Outpass"> | string
    fromDay?: DateTimeFilter<"Outpass"> | Date | string
    toDay?: DateTimeFilter<"Outpass"> | Date | string
    days?: IntFilter<"Outpass"> | number
    requestedTime?: DateTimeFilter<"Outpass"> | Date | string
    isExpired?: BoolFilter<"Outpass"> | boolean
    isApproved?: BoolFilter<"Outpass"> | boolean
    isRejected?: BoolFilter<"Outpass"> | boolean
    issuedBy?: StringFilter<"Outpass"> | string
    issuedTime?: DateTimeFilter<"Outpass"> | Date | string
    message?: StringNullableFilter<"Outpass"> | string | null
    rejectedBy?: StringFilter<"Outpass"> | string
    rejectedTime?: DateTimeFilter<"Outpass"> | Date | string
    checkedOutTime?: DateTimeNullableFilter<"Outpass"> | Date | string | null
    checkedInTime?: DateTimeNullableFilter<"Outpass"> | Date | string | null
    currentLevel?: StringFilter<"Outpass"> | string
    approvalLogs?: JsonNullableFilter<"Outpass">
  }, "id">

  export type OutpassOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromDay?: SortOrder
    toDay?: SortOrder
    days?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrderInput | SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrderInput | SortOrder
    checkedInTime?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    approvalLogs?: SortOrderInput | SortOrder
    _count?: OutpassCountOrderByAggregateInput
    _avg?: OutpassAvgOrderByAggregateInput
    _max?: OutpassMaxOrderByAggregateInput
    _min?: OutpassMinOrderByAggregateInput
    _sum?: OutpassSumOrderByAggregateInput
  }

  export type OutpassScalarWhereWithAggregatesInput = {
    AND?: OutpassScalarWhereWithAggregatesInput | OutpassScalarWhereWithAggregatesInput[]
    OR?: OutpassScalarWhereWithAggregatesInput[]
    NOT?: OutpassScalarWhereWithAggregatesInput | OutpassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outpass"> | string
    studentId?: StringWithAggregatesFilter<"Outpass"> | string
    studentGender?: StringWithAggregatesFilter<"Outpass"> | string
    reason?: StringWithAggregatesFilter<"Outpass"> | string
    fromDay?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    toDay?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    days?: IntWithAggregatesFilter<"Outpass"> | number
    requestedTime?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    isExpired?: BoolWithAggregatesFilter<"Outpass"> | boolean
    isApproved?: BoolWithAggregatesFilter<"Outpass"> | boolean
    isRejected?: BoolWithAggregatesFilter<"Outpass"> | boolean
    issuedBy?: StringWithAggregatesFilter<"Outpass"> | string
    issuedTime?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    message?: StringNullableWithAggregatesFilter<"Outpass"> | string | null
    rejectedBy?: StringWithAggregatesFilter<"Outpass"> | string
    rejectedTime?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    checkedOutTime?: DateTimeNullableWithAggregatesFilter<"Outpass"> | Date | string | null
    checkedInTime?: DateTimeNullableWithAggregatesFilter<"Outpass"> | Date | string | null
    currentLevel?: StringWithAggregatesFilter<"Outpass"> | string
    approvalLogs?: JsonNullableWithAggregatesFilter<"Outpass">
  }

  export type OutingWhereInput = {
    AND?: OutingWhereInput | OutingWhereInput[]
    OR?: OutingWhereInput[]
    NOT?: OutingWhereInput | OutingWhereInput[]
    id?: StringFilter<"Outing"> | string
    studentId?: StringFilter<"Outing"> | string
    studentGender?: StringFilter<"Outing"> | string
    reason?: StringFilter<"Outing"> | string
    fromTime?: DateTimeFilter<"Outing"> | Date | string
    toTime?: DateTimeFilter<"Outing"> | Date | string
    hours?: IntFilter<"Outing"> | number
    requestedTime?: DateTimeFilter<"Outing"> | Date | string
    isExpired?: BoolFilter<"Outing"> | boolean
    isApproved?: BoolFilter<"Outing"> | boolean
    isRejected?: BoolFilter<"Outing"> | boolean
    issuedBy?: StringFilter<"Outing"> | string
    issuedTime?: DateTimeFilter<"Outing"> | Date | string
    message?: StringNullableFilter<"Outing"> | string | null
    rejectedBy?: StringFilter<"Outing"> | string
    rejectedTime?: DateTimeFilter<"Outing"> | Date | string
    checkedOutTime?: DateTimeNullableFilter<"Outing"> | Date | string | null
    checkedInTime?: DateTimeNullableFilter<"Outing"> | Date | string | null
    currentLevel?: StringFilter<"Outing"> | string
    approvalLogs?: JsonNullableFilter<"Outing">
  }

  export type OutingOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    hours?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrderInput | SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrderInput | SortOrder
    checkedInTime?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    approvalLogs?: SortOrderInput | SortOrder
  }

  export type OutingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutingWhereInput | OutingWhereInput[]
    OR?: OutingWhereInput[]
    NOT?: OutingWhereInput | OutingWhereInput[]
    studentId?: StringFilter<"Outing"> | string
    studentGender?: StringFilter<"Outing"> | string
    reason?: StringFilter<"Outing"> | string
    fromTime?: DateTimeFilter<"Outing"> | Date | string
    toTime?: DateTimeFilter<"Outing"> | Date | string
    hours?: IntFilter<"Outing"> | number
    requestedTime?: DateTimeFilter<"Outing"> | Date | string
    isExpired?: BoolFilter<"Outing"> | boolean
    isApproved?: BoolFilter<"Outing"> | boolean
    isRejected?: BoolFilter<"Outing"> | boolean
    issuedBy?: StringFilter<"Outing"> | string
    issuedTime?: DateTimeFilter<"Outing"> | Date | string
    message?: StringNullableFilter<"Outing"> | string | null
    rejectedBy?: StringFilter<"Outing"> | string
    rejectedTime?: DateTimeFilter<"Outing"> | Date | string
    checkedOutTime?: DateTimeNullableFilter<"Outing"> | Date | string | null
    checkedInTime?: DateTimeNullableFilter<"Outing"> | Date | string | null
    currentLevel?: StringFilter<"Outing"> | string
    approvalLogs?: JsonNullableFilter<"Outing">
  }, "id">

  export type OutingOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    hours?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrderInput | SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrderInput | SortOrder
    checkedInTime?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    approvalLogs?: SortOrderInput | SortOrder
    _count?: OutingCountOrderByAggregateInput
    _avg?: OutingAvgOrderByAggregateInput
    _max?: OutingMaxOrderByAggregateInput
    _min?: OutingMinOrderByAggregateInput
    _sum?: OutingSumOrderByAggregateInput
  }

  export type OutingScalarWhereWithAggregatesInput = {
    AND?: OutingScalarWhereWithAggregatesInput | OutingScalarWhereWithAggregatesInput[]
    OR?: OutingScalarWhereWithAggregatesInput[]
    NOT?: OutingScalarWhereWithAggregatesInput | OutingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outing"> | string
    studentId?: StringWithAggregatesFilter<"Outing"> | string
    studentGender?: StringWithAggregatesFilter<"Outing"> | string
    reason?: StringWithAggregatesFilter<"Outing"> | string
    fromTime?: DateTimeWithAggregatesFilter<"Outing"> | Date | string
    toTime?: DateTimeWithAggregatesFilter<"Outing"> | Date | string
    hours?: IntWithAggregatesFilter<"Outing"> | number
    requestedTime?: DateTimeWithAggregatesFilter<"Outing"> | Date | string
    isExpired?: BoolWithAggregatesFilter<"Outing"> | boolean
    isApproved?: BoolWithAggregatesFilter<"Outing"> | boolean
    isRejected?: BoolWithAggregatesFilter<"Outing"> | boolean
    issuedBy?: StringWithAggregatesFilter<"Outing"> | string
    issuedTime?: DateTimeWithAggregatesFilter<"Outing"> | Date | string
    message?: StringNullableWithAggregatesFilter<"Outing"> | string | null
    rejectedBy?: StringWithAggregatesFilter<"Outing"> | string
    rejectedTime?: DateTimeWithAggregatesFilter<"Outing"> | Date | string
    checkedOutTime?: DateTimeNullableWithAggregatesFilter<"Outing"> | Date | string | null
    checkedInTime?: DateTimeNullableWithAggregatesFilter<"Outing"> | Date | string | null
    currentLevel?: StringWithAggregatesFilter<"Outing"> | string
    approvalLogs?: JsonNullableWithAggregatesFilter<"Outing">
  }

  export type GrievanceWhereInput = {
    AND?: GrievanceWhereInput | GrievanceWhereInput[]
    OR?: GrievanceWhereInput[]
    NOT?: GrievanceWhereInput | GrievanceWhereInput[]
    id?: StringFilter<"Grievance"> | string
    studentId?: StringNullableFilter<"Grievance"> | string | null
    studentEmail?: StringNullableFilter<"Grievance"> | string | null
    category?: StringFilter<"Grievance"> | string
    description?: StringFilter<"Grievance"> | string
    isAnonymous?: BoolFilter<"Grievance"> | boolean
    status?: StringFilter<"Grievance"> | string
    resolvedBy?: StringNullableFilter<"Grievance"> | string | null
    resolution?: StringNullableFilter<"Grievance"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Grievance"> | Date | string | null
    createdAt?: DateTimeFilter<"Grievance"> | Date | string
  }

  export type GrievanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    studentEmail?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    isAnonymous?: SortOrder
    status?: SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type GrievanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GrievanceWhereInput | GrievanceWhereInput[]
    OR?: GrievanceWhereInput[]
    NOT?: GrievanceWhereInput | GrievanceWhereInput[]
    studentId?: StringNullableFilter<"Grievance"> | string | null
    studentEmail?: StringNullableFilter<"Grievance"> | string | null
    category?: StringFilter<"Grievance"> | string
    description?: StringFilter<"Grievance"> | string
    isAnonymous?: BoolFilter<"Grievance"> | boolean
    status?: StringFilter<"Grievance"> | string
    resolvedBy?: StringNullableFilter<"Grievance"> | string | null
    resolution?: StringNullableFilter<"Grievance"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Grievance"> | Date | string | null
    createdAt?: DateTimeFilter<"Grievance"> | Date | string
  }, "id">

  export type GrievanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    studentEmail?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    isAnonymous?: SortOrder
    status?: SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GrievanceCountOrderByAggregateInput
    _max?: GrievanceMaxOrderByAggregateInput
    _min?: GrievanceMinOrderByAggregateInput
  }

  export type GrievanceScalarWhereWithAggregatesInput = {
    AND?: GrievanceScalarWhereWithAggregatesInput | GrievanceScalarWhereWithAggregatesInput[]
    OR?: GrievanceScalarWhereWithAggregatesInput[]
    NOT?: GrievanceScalarWhereWithAggregatesInput | GrievanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grievance"> | string
    studentId?: StringNullableWithAggregatesFilter<"Grievance"> | string | null
    studentEmail?: StringNullableWithAggregatesFilter<"Grievance"> | string | null
    category?: StringWithAggregatesFilter<"Grievance"> | string
    description?: StringWithAggregatesFilter<"Grievance"> | string
    isAnonymous?: BoolWithAggregatesFilter<"Grievance"> | boolean
    status?: StringWithAggregatesFilter<"Grievance"> | string
    resolvedBy?: StringNullableWithAggregatesFilter<"Grievance"> | string | null
    resolution?: StringNullableWithAggregatesFilter<"Grievance"> | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Grievance"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Grievance"> | Date | string
  }

  export type OutpassCreateInput = {
    id?: string
    studentId: string
    studentGender?: string
    reason: string
    fromDay: Date | string
    toDay: Date | string
    days?: number
    requestedTime?: Date | string
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: string
    issuedTime?: Date | string
    message?: string | null
    rejectedBy?: string
    rejectedTime?: Date | string
    checkedOutTime?: Date | string | null
    checkedInTime?: Date | string | null
    currentLevel?: string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutpassUncheckedCreateInput = {
    id?: string
    studentId: string
    studentGender?: string
    reason: string
    fromDay: Date | string
    toDay: Date | string
    days?: number
    requestedTime?: Date | string
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: string
    issuedTime?: Date | string
    message?: string | null
    rejectedBy?: string
    rejectedTime?: Date | string
    checkedOutTime?: Date | string | null
    checkedInTime?: Date | string | null
    currentLevel?: string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutpassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromDay?: DateTimeFieldUpdateOperationsInput | Date | string
    toDay?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutpassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromDay?: DateTimeFieldUpdateOperationsInput | Date | string
    toDay?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutpassCreateManyInput = {
    id?: string
    studentId: string
    studentGender?: string
    reason: string
    fromDay: Date | string
    toDay: Date | string
    days?: number
    requestedTime?: Date | string
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: string
    issuedTime?: Date | string
    message?: string | null
    rejectedBy?: string
    rejectedTime?: Date | string
    checkedOutTime?: Date | string | null
    checkedInTime?: Date | string | null
    currentLevel?: string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutpassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromDay?: DateTimeFieldUpdateOperationsInput | Date | string
    toDay?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutpassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromDay?: DateTimeFieldUpdateOperationsInput | Date | string
    toDay?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutingCreateInput = {
    id?: string
    studentId: string
    studentGender?: string
    reason: string
    fromTime: Date | string
    toTime: Date | string
    hours?: number
    requestedTime?: Date | string
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: string
    issuedTime?: Date | string
    message?: string | null
    rejectedBy?: string
    rejectedTime?: Date | string
    checkedOutTime?: Date | string | null
    checkedInTime?: Date | string | null
    currentLevel?: string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutingUncheckedCreateInput = {
    id?: string
    studentId: string
    studentGender?: string
    reason: string
    fromTime: Date | string
    toTime: Date | string
    hours?: number
    requestedTime?: Date | string
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: string
    issuedTime?: Date | string
    message?: string | null
    rejectedBy?: string
    rejectedTime?: Date | string
    checkedOutTime?: Date | string | null
    checkedInTime?: Date | string | null
    currentLevel?: string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toTime?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toTime?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutingCreateManyInput = {
    id?: string
    studentId: string
    studentGender?: string
    reason: string
    fromTime: Date | string
    toTime: Date | string
    hours?: number
    requestedTime?: Date | string
    isExpired?: boolean
    isApproved?: boolean
    isRejected?: boolean
    issuedBy?: string
    issuedTime?: Date | string
    message?: string | null
    rejectedBy?: string
    rejectedTime?: Date | string
    checkedOutTime?: Date | string | null
    checkedInTime?: Date | string | null
    currentLevel?: string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toTime?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OutingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    fromTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toTime?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    requestedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    issuedBy?: StringFieldUpdateOperationsInput | string
    issuedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedBy?: StringFieldUpdateOperationsInput | string
    rejectedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLevel?: StringFieldUpdateOperationsInput | string
    approvalLogs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GrievanceCreateInput = {
    id?: string
    studentId?: string | null
    studentEmail?: string | null
    category: string
    description: string
    isAnonymous?: boolean
    status?: string
    resolvedBy?: string | null
    resolution?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type GrievanceUncheckedCreateInput = {
    id?: string
    studentId?: string | null
    studentEmail?: string | null
    category: string
    description: string
    isAnonymous?: boolean
    status?: string
    resolvedBy?: string | null
    resolution?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type GrievanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    studentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrievanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    studentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrievanceCreateManyInput = {
    id?: string
    studentId?: string | null
    studentEmail?: string | null
    category: string
    description: string
    isAnonymous?: boolean
    status?: string
    resolvedBy?: string | null
    resolution?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type GrievanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    studentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrievanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    studentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OutpassCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromDay?: SortOrder
    toDay?: SortOrder
    days?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrder
    checkedInTime?: SortOrder
    currentLevel?: SortOrder
    approvalLogs?: SortOrder
  }

  export type OutpassAvgOrderByAggregateInput = {
    days?: SortOrder
  }

  export type OutpassMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromDay?: SortOrder
    toDay?: SortOrder
    days?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrder
    checkedInTime?: SortOrder
    currentLevel?: SortOrder
  }

  export type OutpassMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromDay?: SortOrder
    toDay?: SortOrder
    days?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrder
    checkedInTime?: SortOrder
    currentLevel?: SortOrder
  }

  export type OutpassSumOrderByAggregateInput = {
    days?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type OutingCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    hours?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrder
    checkedInTime?: SortOrder
    currentLevel?: SortOrder
    approvalLogs?: SortOrder
  }

  export type OutingAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type OutingMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    hours?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrder
    checkedInTime?: SortOrder
    currentLevel?: SortOrder
  }

  export type OutingMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentGender?: SortOrder
    reason?: SortOrder
    fromTime?: SortOrder
    toTime?: SortOrder
    hours?: SortOrder
    requestedTime?: SortOrder
    isExpired?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    issuedBy?: SortOrder
    issuedTime?: SortOrder
    message?: SortOrder
    rejectedBy?: SortOrder
    rejectedTime?: SortOrder
    checkedOutTime?: SortOrder
    checkedInTime?: SortOrder
    currentLevel?: SortOrder
  }

  export type OutingSumOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type GrievanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isAnonymous?: SortOrder
    status?: SortOrder
    resolvedBy?: SortOrder
    resolution?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GrievanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isAnonymous?: SortOrder
    status?: SortOrder
    resolvedBy?: SortOrder
    resolution?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GrievanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isAnonymous?: SortOrder
    status?: SortOrder
    resolvedBy?: SortOrder
    resolution?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OutpassDefaultArgs instead
     */
    export type OutpassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutpassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutingDefaultArgs instead
     */
    export type OutingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GrievanceDefaultArgs instead
     */
    export type GrievanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GrievanceDefaultArgs<ExtArgs>

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