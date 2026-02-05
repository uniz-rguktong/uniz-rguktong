
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
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model FacultyProfile
 * 
 */
export type FacultyProfile = $Result.DefaultSelection<Prisma.$FacultyProfilePayload>
/**
 * Model AdminProfile
 * 
 */
export type AdminProfile = $Result.DefaultSelection<Prisma.$AdminProfilePayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StudentProfiles
 * const studentProfiles = await prisma.studentProfile.findMany()
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
   * // Fetch zero or more StudentProfiles
   * const studentProfiles = await prisma.studentProfile.findMany()
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
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs>;

  /**
   * `prisma.facultyProfile`: Exposes CRUD operations for the **FacultyProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyProfiles
    * const facultyProfiles = await prisma.facultyProfile.findMany()
    * ```
    */
  get facultyProfile(): Prisma.FacultyProfileDelegate<ExtArgs>;

  /**
   * `prisma.adminProfile`: Exposes CRUD operations for the **AdminProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminProfiles
    * const adminProfiles = await prisma.adminProfile.findMany()
    * ```
    */
  get adminProfile(): Prisma.AdminProfileDelegate<ExtArgs>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs>;
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
    StudentProfile: 'StudentProfile',
    FacultyProfile: 'FacultyProfile',
    AdminProfile: 'AdminProfile',
    Banner: 'Banner'
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
      modelProps: "studentProfile" | "facultyProfile" | "adminProfile" | "banner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      FacultyProfile: {
        payload: Prisma.$FacultyProfilePayload<ExtArgs>
        fields: Prisma.FacultyProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          findFirst: {
            args: Prisma.FacultyProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          findMany: {
            args: Prisma.FacultyProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[]
          }
          create: {
            args: Prisma.FacultyProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          createMany: {
            args: Prisma.FacultyProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[]
          }
          delete: {
            args: Prisma.FacultyProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          update: {
            args: Prisma.FacultyProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          deleteMany: {
            args: Prisma.FacultyProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultyProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          aggregate: {
            args: Prisma.FacultyProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyProfile>
          }
          groupBy: {
            args: Prisma.FacultyProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyProfileCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyProfileCountAggregateOutputType> | number
          }
        }
      }
      AdminProfile: {
        payload: Prisma.$AdminProfilePayload<ExtArgs>
        fields: Prisma.AdminProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findFirst: {
            args: Prisma.AdminProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findMany: {
            args: Prisma.AdminProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          create: {
            args: Prisma.AdminProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          createMany: {
            args: Prisma.AdminProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          delete: {
            args: Prisma.AdminProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          update: {
            args: Prisma.AdminProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          deleteMany: {
            args: Prisma.AdminProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          aggregate: {
            args: Prisma.AdminProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminProfile>
          }
          groupBy: {
            args: Prisma.AdminProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminProfileCountArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
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
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    email: string | null
    gender: string | null
    phone: string | null
    fatherName: string | null
    motherName: string | null
    fatherOccupation: string | null
    motherOccupation: string | null
    fatherEmail: string | null
    motherEmail: string | null
    fatherAddress: string | null
    motherAddress: string | null
    bloodGroup: string | null
    dateOfBirth: Date | null
    profileUrl: string | null
    year: string | null
    branch: string | null
    section: string | null
    roomno: string | null
    isPresentInCampus: boolean | null
    isApplicationPending: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    email: string | null
    gender: string | null
    phone: string | null
    fatherName: string | null
    motherName: string | null
    fatherOccupation: string | null
    motherOccupation: string | null
    fatherEmail: string | null
    motherEmail: string | null
    fatherAddress: string | null
    motherAddress: string | null
    bloodGroup: string | null
    dateOfBirth: Date | null
    profileUrl: string | null
    year: string | null
    branch: string | null
    section: string | null
    roomno: string | null
    isPresentInCampus: boolean | null
    isApplicationPending: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    username: number
    name: number
    email: number
    gender: number
    phone: number
    fatherName: number
    motherName: number
    fatherOccupation: number
    motherOccupation: number
    fatherEmail: number
    motherEmail: number
    fatherAddress: number
    motherAddress: number
    bloodGroup: number
    dateOfBirth: number
    profileUrl: number
    year: number
    branch: number
    section: number
    roomno: number
    isPresentInCampus: number
    isApplicationPending: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentProfileMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    gender?: true
    phone?: true
    fatherName?: true
    motherName?: true
    fatherOccupation?: true
    motherOccupation?: true
    fatherEmail?: true
    motherEmail?: true
    fatherAddress?: true
    motherAddress?: true
    bloodGroup?: true
    dateOfBirth?: true
    profileUrl?: true
    year?: true
    branch?: true
    section?: true
    roomno?: true
    isPresentInCampus?: true
    isApplicationPending?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    gender?: true
    phone?: true
    fatherName?: true
    motherName?: true
    fatherOccupation?: true
    motherOccupation?: true
    fatherEmail?: true
    motherEmail?: true
    fatherAddress?: true
    motherAddress?: true
    bloodGroup?: true
    dateOfBirth?: true
    profileUrl?: true
    year?: true
    branch?: true
    section?: true
    roomno?: true
    isPresentInCampus?: true
    isApplicationPending?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    gender?: true
    phone?: true
    fatherName?: true
    motherName?: true
    fatherOccupation?: true
    motherOccupation?: true
    fatherEmail?: true
    motherEmail?: true
    fatherAddress?: true
    motherAddress?: true
    bloodGroup?: true
    dateOfBirth?: true
    profileUrl?: true
    year?: true
    branch?: true
    section?: true
    roomno?: true
    isPresentInCampus?: true
    isApplicationPending?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    username: string
    name: string
    email: string
    gender: string
    phone: string
    fatherName: string
    motherName: string
    fatherOccupation: string
    motherOccupation: string
    fatherEmail: string
    motherEmail: string
    fatherAddress: string
    motherAddress: string
    bloodGroup: string
    dateOfBirth: Date | null
    profileUrl: string
    year: string
    branch: string
    section: string
    roomno: string
    isPresentInCampus: boolean
    isApplicationPending: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    fatherName?: boolean
    motherName?: boolean
    fatherOccupation?: boolean
    motherOccupation?: boolean
    fatherEmail?: boolean
    motherEmail?: boolean
    fatherAddress?: boolean
    motherAddress?: boolean
    bloodGroup?: boolean
    dateOfBirth?: boolean
    profileUrl?: boolean
    year?: boolean
    branch?: boolean
    section?: boolean
    roomno?: boolean
    isPresentInCampus?: boolean
    isApplicationPending?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    fatherName?: boolean
    motherName?: boolean
    fatherOccupation?: boolean
    motherOccupation?: boolean
    fatherEmail?: boolean
    motherEmail?: boolean
    fatherAddress?: boolean
    motherAddress?: boolean
    bloodGroup?: boolean
    dateOfBirth?: boolean
    profileUrl?: boolean
    year?: boolean
    branch?: boolean
    section?: boolean
    roomno?: boolean
    isPresentInCampus?: boolean
    isApplicationPending?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    fatherName?: boolean
    motherName?: boolean
    fatherOccupation?: boolean
    motherOccupation?: boolean
    fatherEmail?: boolean
    motherEmail?: boolean
    fatherAddress?: boolean
    motherAddress?: boolean
    bloodGroup?: boolean
    dateOfBirth?: boolean
    profileUrl?: boolean
    year?: boolean
    branch?: boolean
    section?: boolean
    roomno?: boolean
    isPresentInCampus?: boolean
    isApplicationPending?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string
      email: string
      gender: string
      phone: string
      fatherName: string
      motherName: string
      fatherOccupation: string
      motherOccupation: string
      fatherEmail: string
      motherEmail: string
      fatherAddress: string
      motherAddress: string
      bloodGroup: string
      dateOfBirth: Date | null
      profileUrl: string
      year: string
      branch: string
      section: string
      roomno: string
      isPresentInCampus: boolean
      isApplicationPending: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
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
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StudentProfile model
   */ 
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly username: FieldRef<"StudentProfile", 'String'>
    readonly name: FieldRef<"StudentProfile", 'String'>
    readonly email: FieldRef<"StudentProfile", 'String'>
    readonly gender: FieldRef<"StudentProfile", 'String'>
    readonly phone: FieldRef<"StudentProfile", 'String'>
    readonly fatherName: FieldRef<"StudentProfile", 'String'>
    readonly motherName: FieldRef<"StudentProfile", 'String'>
    readonly fatherOccupation: FieldRef<"StudentProfile", 'String'>
    readonly motherOccupation: FieldRef<"StudentProfile", 'String'>
    readonly fatherEmail: FieldRef<"StudentProfile", 'String'>
    readonly motherEmail: FieldRef<"StudentProfile", 'String'>
    readonly fatherAddress: FieldRef<"StudentProfile", 'String'>
    readonly motherAddress: FieldRef<"StudentProfile", 'String'>
    readonly bloodGroup: FieldRef<"StudentProfile", 'String'>
    readonly dateOfBirth: FieldRef<"StudentProfile", 'DateTime'>
    readonly profileUrl: FieldRef<"StudentProfile", 'String'>
    readonly year: FieldRef<"StudentProfile", 'String'>
    readonly branch: FieldRef<"StudentProfile", 'String'>
    readonly section: FieldRef<"StudentProfile", 'String'>
    readonly roomno: FieldRef<"StudentProfile", 'String'>
    readonly isPresentInCampus: FieldRef<"StudentProfile", 'Boolean'>
    readonly isApplicationPending: FieldRef<"StudentProfile", 'Boolean'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
  }


  /**
   * Model FacultyProfile
   */

  export type AggregateFacultyProfile = {
    _count: FacultyProfileCountAggregateOutputType | null
    _min: FacultyProfileMinAggregateOutputType | null
    _max: FacultyProfileMaxAggregateOutputType | null
  }

  export type FacultyProfileMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    email: string | null
    contact: string | null
    department: string | null
    designation: string | null
    role: string | null
    profileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultyProfileMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    email: string | null
    contact: string | null
    department: string | null
    designation: string | null
    role: string | null
    profileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultyProfileCountAggregateOutputType = {
    id: number
    username: number
    name: number
    email: number
    contact: number
    department: number
    designation: number
    role: number
    profileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacultyProfileMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    contact?: true
    department?: true
    designation?: true
    role?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultyProfileMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    contact?: true
    department?: true
    designation?: true
    role?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultyProfileCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    contact?: true
    department?: true
    designation?: true
    role?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacultyProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyProfile to aggregate.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyProfiles
    **/
    _count?: true | FacultyProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyProfileMaxAggregateInputType
  }

  export type GetFacultyProfileAggregateType<T extends FacultyProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyProfile[P]>
      : GetScalarType<T[P], AggregateFacultyProfile[P]>
  }




  export type FacultyProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyProfileWhereInput
    orderBy?: FacultyProfileOrderByWithAggregationInput | FacultyProfileOrderByWithAggregationInput[]
    by: FacultyProfileScalarFieldEnum[] | FacultyProfileScalarFieldEnum
    having?: FacultyProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyProfileCountAggregateInputType | true
    _min?: FacultyProfileMinAggregateInputType
    _max?: FacultyProfileMaxAggregateInputType
  }

  export type FacultyProfileGroupByOutputType = {
    id: string
    username: string
    name: string
    email: string
    contact: string
    department: string
    designation: string
    role: string
    profileUrl: string
    createdAt: Date
    updatedAt: Date
    _count: FacultyProfileCountAggregateOutputType | null
    _min: FacultyProfileMinAggregateOutputType | null
    _max: FacultyProfileMaxAggregateOutputType | null
  }

  type GetFacultyProfileGroupByPayload<T extends FacultyProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyProfileGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyProfileGroupByOutputType[P]>
        }
      >
    >


  export type FacultyProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    contact?: boolean
    department?: boolean
    designation?: boolean
    role?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facultyProfile"]>

  export type FacultyProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    contact?: boolean
    department?: boolean
    designation?: boolean
    role?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facultyProfile"]>

  export type FacultyProfileSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    contact?: boolean
    department?: boolean
    designation?: boolean
    role?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $FacultyProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string
      email: string
      contact: string
      department: string
      designation: string
      role: string
      profileUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facultyProfile"]>
    composites: {}
  }

  type FacultyProfileGetPayload<S extends boolean | null | undefined | FacultyProfileDefaultArgs> = $Result.GetResult<Prisma.$FacultyProfilePayload, S>

  type FacultyProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacultyProfileCountAggregateInputType | true
    }

  export interface FacultyProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyProfile'], meta: { name: 'FacultyProfile' } }
    /**
     * Find zero or one FacultyProfile that matches the filter.
     * @param {FacultyProfileFindUniqueArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyProfileFindUniqueArgs>(args: SelectSubset<T, FacultyProfileFindUniqueArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FacultyProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacultyProfileFindUniqueOrThrowArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FacultyProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindFirstArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyProfileFindFirstArgs>(args?: SelectSubset<T, FacultyProfileFindFirstArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FacultyProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindFirstOrThrowArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FacultyProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyProfiles
     * const facultyProfiles = await prisma.facultyProfile.findMany()
     * 
     * // Get first 10 FacultyProfiles
     * const facultyProfiles = await prisma.facultyProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyProfileFindManyArgs>(args?: SelectSubset<T, FacultyProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FacultyProfile.
     * @param {FacultyProfileCreateArgs} args - Arguments to create a FacultyProfile.
     * @example
     * // Create one FacultyProfile
     * const FacultyProfile = await prisma.facultyProfile.create({
     *   data: {
     *     // ... data to create a FacultyProfile
     *   }
     * })
     * 
     */
    create<T extends FacultyProfileCreateArgs>(args: SelectSubset<T, FacultyProfileCreateArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FacultyProfiles.
     * @param {FacultyProfileCreateManyArgs} args - Arguments to create many FacultyProfiles.
     * @example
     * // Create many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyProfileCreateManyArgs>(args?: SelectSubset<T, FacultyProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyProfiles and returns the data saved in the database.
     * @param {FacultyProfileCreateManyAndReturnArgs} args - Arguments to create many FacultyProfiles.
     * @example
     * // Create many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyProfiles and only return the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FacultyProfile.
     * @param {FacultyProfileDeleteArgs} args - Arguments to delete one FacultyProfile.
     * @example
     * // Delete one FacultyProfile
     * const FacultyProfile = await prisma.facultyProfile.delete({
     *   where: {
     *     // ... filter to delete one FacultyProfile
     *   }
     * })
     * 
     */
    delete<T extends FacultyProfileDeleteArgs>(args: SelectSubset<T, FacultyProfileDeleteArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FacultyProfile.
     * @param {FacultyProfileUpdateArgs} args - Arguments to update one FacultyProfile.
     * @example
     * // Update one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyProfileUpdateArgs>(args: SelectSubset<T, FacultyProfileUpdateArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FacultyProfiles.
     * @param {FacultyProfileDeleteManyArgs} args - Arguments to filter FacultyProfiles to delete.
     * @example
     * // Delete a few FacultyProfiles
     * const { count } = await prisma.facultyProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyProfileDeleteManyArgs>(args?: SelectSubset<T, FacultyProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyProfileUpdateManyArgs>(args: SelectSubset<T, FacultyProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultyProfile.
     * @param {FacultyProfileUpsertArgs} args - Arguments to update or create a FacultyProfile.
     * @example
     * // Update or create a FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.upsert({
     *   create: {
     *     // ... data to create a FacultyProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyProfile we want to update
     *   }
     * })
     */
    upsert<T extends FacultyProfileUpsertArgs>(args: SelectSubset<T, FacultyProfileUpsertArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FacultyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileCountArgs} args - Arguments to filter FacultyProfiles to count.
     * @example
     * // Count the number of FacultyProfiles
     * const count = await prisma.facultyProfile.count({
     *   where: {
     *     // ... the filter for the FacultyProfiles we want to count
     *   }
     * })
    **/
    count<T extends FacultyProfileCountArgs>(
      args?: Subset<T, FacultyProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyProfileAggregateArgs>(args: Subset<T, FacultyProfileAggregateArgs>): Prisma.PrismaPromise<GetFacultyProfileAggregateType<T>>

    /**
     * Group by FacultyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileGroupByArgs} args - Group by arguments.
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
      T extends FacultyProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyProfileGroupByArgs['orderBy'] }
        : { orderBy?: FacultyProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyProfile model
   */
  readonly fields: FacultyProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FacultyProfile model
   */ 
  interface FacultyProfileFieldRefs {
    readonly id: FieldRef<"FacultyProfile", 'String'>
    readonly username: FieldRef<"FacultyProfile", 'String'>
    readonly name: FieldRef<"FacultyProfile", 'String'>
    readonly email: FieldRef<"FacultyProfile", 'String'>
    readonly contact: FieldRef<"FacultyProfile", 'String'>
    readonly department: FieldRef<"FacultyProfile", 'String'>
    readonly designation: FieldRef<"FacultyProfile", 'String'>
    readonly role: FieldRef<"FacultyProfile", 'String'>
    readonly profileUrl: FieldRef<"FacultyProfile", 'String'>
    readonly createdAt: FieldRef<"FacultyProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"FacultyProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyProfile findUnique
   */
  export type FacultyProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile findUniqueOrThrow
   */
  export type FacultyProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile findFirst
   */
  export type FacultyProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyProfiles.
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: FacultyProfileScalarFieldEnum | FacultyProfileScalarFieldEnum[]
  }

  /**
   * FacultyProfile findFirstOrThrow
   */
  export type FacultyProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyProfiles.
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: FacultyProfileScalarFieldEnum | FacultyProfileScalarFieldEnum[]
  }

  /**
   * FacultyProfile findMany
   */
  export type FacultyProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Filter, which FacultyProfiles to fetch.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyProfiles.
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    distinct?: FacultyProfileScalarFieldEnum | FacultyProfileScalarFieldEnum[]
  }

  /**
   * FacultyProfile create
   */
  export type FacultyProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a FacultyProfile.
     */
    data: XOR<FacultyProfileCreateInput, FacultyProfileUncheckedCreateInput>
  }

  /**
   * FacultyProfile createMany
   */
  export type FacultyProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyProfiles.
     */
    data: FacultyProfileCreateManyInput | FacultyProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyProfile createManyAndReturn
   */
  export type FacultyProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FacultyProfiles.
     */
    data: FacultyProfileCreateManyInput | FacultyProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyProfile update
   */
  export type FacultyProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a FacultyProfile.
     */
    data: XOR<FacultyProfileUpdateInput, FacultyProfileUncheckedUpdateInput>
    /**
     * Choose, which FacultyProfile to update.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile updateMany
   */
  export type FacultyProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyProfiles.
     */
    data: XOR<FacultyProfileUpdateManyMutationInput, FacultyProfileUncheckedUpdateManyInput>
    /**
     * Filter which FacultyProfiles to update
     */
    where?: FacultyProfileWhereInput
  }

  /**
   * FacultyProfile upsert
   */
  export type FacultyProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the FacultyProfile to update in case it exists.
     */
    where: FacultyProfileWhereUniqueInput
    /**
     * In case the FacultyProfile found by the `where` argument doesn't exist, create a new FacultyProfile with this data.
     */
    create: XOR<FacultyProfileCreateInput, FacultyProfileUncheckedCreateInput>
    /**
     * In case the FacultyProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyProfileUpdateInput, FacultyProfileUncheckedUpdateInput>
  }

  /**
   * FacultyProfile delete
   */
  export type FacultyProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Filter which FacultyProfile to delete.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile deleteMany
   */
  export type FacultyProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyProfiles to delete
     */
    where?: FacultyProfileWhereInput
  }

  /**
   * FacultyProfile without action
   */
  export type FacultyProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
  }


  /**
   * Model AdminProfile
   */

  export type AggregateAdminProfile = {
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  export type AdminProfileMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminProfileMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminProfileCountAggregateOutputType = {
    id: number
    username: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminProfileMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminProfileMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminProfileCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfile to aggregate.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminProfiles
    **/
    _count?: true | AdminProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminProfileMaxAggregateInputType
  }

  export type GetAdminProfileAggregateType<T extends AdminProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminProfile[P]>
      : GetScalarType<T[P], AggregateAdminProfile[P]>
  }




  export type AdminProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminProfileWhereInput
    orderBy?: AdminProfileOrderByWithAggregationInput | AdminProfileOrderByWithAggregationInput[]
    by: AdminProfileScalarFieldEnum[] | AdminProfileScalarFieldEnum
    having?: AdminProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminProfileCountAggregateInputType | true
    _min?: AdminProfileMinAggregateInputType
    _max?: AdminProfileMaxAggregateInputType
  }

  export type AdminProfileGroupByOutputType = {
    id: string
    username: string
    email: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  type GetAdminProfileGroupByPayload<T extends AdminProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
        }
      >
    >


  export type AdminProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminProfile"]>
    composites: {}
  }

  type AdminProfileGetPayload<S extends boolean | null | undefined | AdminProfileDefaultArgs> = $Result.GetResult<Prisma.$AdminProfilePayload, S>

  type AdminProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminProfileCountAggregateInputType | true
    }

  export interface AdminProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminProfile'], meta: { name: 'AdminProfile' } }
    /**
     * Find zero or one AdminProfile that matches the filter.
     * @param {AdminProfileFindUniqueArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminProfileFindUniqueArgs>(args: SelectSubset<T, AdminProfileFindUniqueArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminProfileFindUniqueOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminProfileFindFirstArgs>(args?: SelectSubset<T, AdminProfileFindFirstArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany()
     * 
     * // Get first 10 AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminProfileFindManyArgs>(args?: SelectSubset<T, AdminProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminProfile.
     * @param {AdminProfileCreateArgs} args - Arguments to create a AdminProfile.
     * @example
     * // Create one AdminProfile
     * const AdminProfile = await prisma.adminProfile.create({
     *   data: {
     *     // ... data to create a AdminProfile
     *   }
     * })
     * 
     */
    create<T extends AdminProfileCreateArgs>(args: SelectSubset<T, AdminProfileCreateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminProfiles.
     * @param {AdminProfileCreateManyArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminProfileCreateManyArgs>(args?: SelectSubset<T, AdminProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminProfiles and returns the data saved in the database.
     * @param {AdminProfileCreateManyAndReturnArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminProfiles and only return the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminProfile.
     * @param {AdminProfileDeleteArgs} args - Arguments to delete one AdminProfile.
     * @example
     * // Delete one AdminProfile
     * const AdminProfile = await prisma.adminProfile.delete({
     *   where: {
     *     // ... filter to delete one AdminProfile
     *   }
     * })
     * 
     */
    delete<T extends AdminProfileDeleteArgs>(args: SelectSubset<T, AdminProfileDeleteArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminProfile.
     * @param {AdminProfileUpdateArgs} args - Arguments to update one AdminProfile.
     * @example
     * // Update one AdminProfile
     * const adminProfile = await prisma.adminProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminProfileUpdateArgs>(args: SelectSubset<T, AdminProfileUpdateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminProfiles.
     * @param {AdminProfileDeleteManyArgs} args - Arguments to filter AdminProfiles to delete.
     * @example
     * // Delete a few AdminProfiles
     * const { count } = await prisma.adminProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminProfileDeleteManyArgs>(args?: SelectSubset<T, AdminProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminProfiles
     * const adminProfile = await prisma.adminProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminProfileUpdateManyArgs>(args: SelectSubset<T, AdminProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminProfile.
     * @param {AdminProfileUpsertArgs} args - Arguments to update or create a AdminProfile.
     * @example
     * // Update or create a AdminProfile
     * const adminProfile = await prisma.adminProfile.upsert({
     *   create: {
     *     // ... data to create a AdminProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminProfile we want to update
     *   }
     * })
     */
    upsert<T extends AdminProfileUpsertArgs>(args: SelectSubset<T, AdminProfileUpsertArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileCountArgs} args - Arguments to filter AdminProfiles to count.
     * @example
     * // Count the number of AdminProfiles
     * const count = await prisma.adminProfile.count({
     *   where: {
     *     // ... the filter for the AdminProfiles we want to count
     *   }
     * })
    **/
    count<T extends AdminProfileCountArgs>(
      args?: Subset<T, AdminProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminProfileAggregateArgs>(args: Subset<T, AdminProfileAggregateArgs>): Prisma.PrismaPromise<GetAdminProfileAggregateType<T>>

    /**
     * Group by AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileGroupByArgs} args - Group by arguments.
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
      T extends AdminProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminProfileGroupByArgs['orderBy'] }
        : { orderBy?: AdminProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminProfile model
   */
  readonly fields: AdminProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminProfile model
   */ 
  interface AdminProfileFieldRefs {
    readonly id: FieldRef<"AdminProfile", 'String'>
    readonly username: FieldRef<"AdminProfile", 'String'>
    readonly email: FieldRef<"AdminProfile", 'String'>
    readonly role: FieldRef<"AdminProfile", 'String'>
    readonly createdAt: FieldRef<"AdminProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminProfile findUnique
   */
  export type AdminProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findUniqueOrThrow
   */
  export type AdminProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findFirst
   */
  export type AdminProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findFirstOrThrow
   */
  export type AdminProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findMany
   */
  export type AdminProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Filter, which AdminProfiles to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile create
   */
  export type AdminProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminProfile.
     */
    data: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
  }

  /**
   * AdminProfile createMany
   */
  export type AdminProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminProfile createManyAndReturn
   */
  export type AdminProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminProfile update
   */
  export type AdminProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminProfile.
     */
    data: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
    /**
     * Choose, which AdminProfile to update.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile updateMany
   */
  export type AdminProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminProfiles.
     */
    data: XOR<AdminProfileUpdateManyMutationInput, AdminProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdminProfiles to update
     */
    where?: AdminProfileWhereInput
  }

  /**
   * AdminProfile upsert
   */
  export type AdminProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminProfile to update in case it exists.
     */
    where: AdminProfileWhereUniqueInput
    /**
     * In case the AdminProfile found by the `where` argument doesn't exist, create a new AdminProfile with this data.
     */
    create: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
    /**
     * In case the AdminProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
  }

  /**
   * AdminProfile delete
   */
  export type AdminProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Filter which AdminProfile to delete.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile deleteMany
   */
  export type AdminProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfiles to delete
     */
    where?: AdminProfileWhereInput
  }

  /**
   * AdminProfile without action
   */
  export type AdminProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    imageUrl: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    imageUrl: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    text: number
    imageUrl: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    imageUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    imageUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    imageUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    title: string
    text: string
    imageUrl: string
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      text: string
      imageUrl: string
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Banner model
   */ 
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly title: FieldRef<"Banner", 'String'>
    readonly text: FieldRef<"Banner", 'String'>
    readonly imageUrl: FieldRef<"Banner", 'String'>
    readonly isPublished: FieldRef<"Banner", 'Boolean'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
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


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    email: 'email',
    gender: 'gender',
    phone: 'phone',
    fatherName: 'fatherName',
    motherName: 'motherName',
    fatherOccupation: 'fatherOccupation',
    motherOccupation: 'motherOccupation',
    fatherEmail: 'fatherEmail',
    motherEmail: 'motherEmail',
    fatherAddress: 'fatherAddress',
    motherAddress: 'motherAddress',
    bloodGroup: 'bloodGroup',
    dateOfBirth: 'dateOfBirth',
    profileUrl: 'profileUrl',
    year: 'year',
    branch: 'branch',
    section: 'section',
    roomno: 'roomno',
    isPresentInCampus: 'isPresentInCampus',
    isApplicationPending: 'isApplicationPending',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const FacultyProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    email: 'email',
    contact: 'contact',
    department: 'department',
    designation: 'designation',
    role: 'role',
    profileUrl: 'profileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacultyProfileScalarFieldEnum = (typeof FacultyProfileScalarFieldEnum)[keyof typeof FacultyProfileScalarFieldEnum]


  export const AdminProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminProfileScalarFieldEnum = (typeof AdminProfileScalarFieldEnum)[keyof typeof AdminProfileScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    imageUrl: 'imageUrl',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    username?: StringFilter<"StudentProfile"> | string
    name?: StringFilter<"StudentProfile"> | string
    email?: StringFilter<"StudentProfile"> | string
    gender?: StringFilter<"StudentProfile"> | string
    phone?: StringFilter<"StudentProfile"> | string
    fatherName?: StringFilter<"StudentProfile"> | string
    motherName?: StringFilter<"StudentProfile"> | string
    fatherOccupation?: StringFilter<"StudentProfile"> | string
    motherOccupation?: StringFilter<"StudentProfile"> | string
    fatherEmail?: StringFilter<"StudentProfile"> | string
    motherEmail?: StringFilter<"StudentProfile"> | string
    fatherAddress?: StringFilter<"StudentProfile"> | string
    motherAddress?: StringFilter<"StudentProfile"> | string
    bloodGroup?: StringFilter<"StudentProfile"> | string
    dateOfBirth?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    profileUrl?: StringFilter<"StudentProfile"> | string
    year?: StringFilter<"StudentProfile"> | string
    branch?: StringFilter<"StudentProfile"> | string
    section?: StringFilter<"StudentProfile"> | string
    roomno?: StringFilter<"StudentProfile"> | string
    isPresentInCampus?: BoolFilter<"StudentProfile"> | boolean
    isApplicationPending?: BoolFilter<"StudentProfile"> | boolean
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherOccupation?: SortOrder
    motherOccupation?: SortOrder
    fatherEmail?: SortOrder
    motherEmail?: SortOrder
    fatherAddress?: SortOrder
    motherAddress?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    profileUrl?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    section?: SortOrder
    roomno?: SortOrder
    isPresentInCampus?: SortOrder
    isApplicationPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    name?: StringFilter<"StudentProfile"> | string
    email?: StringFilter<"StudentProfile"> | string
    gender?: StringFilter<"StudentProfile"> | string
    phone?: StringFilter<"StudentProfile"> | string
    fatherName?: StringFilter<"StudentProfile"> | string
    motherName?: StringFilter<"StudentProfile"> | string
    fatherOccupation?: StringFilter<"StudentProfile"> | string
    motherOccupation?: StringFilter<"StudentProfile"> | string
    fatherEmail?: StringFilter<"StudentProfile"> | string
    motherEmail?: StringFilter<"StudentProfile"> | string
    fatherAddress?: StringFilter<"StudentProfile"> | string
    motherAddress?: StringFilter<"StudentProfile"> | string
    bloodGroup?: StringFilter<"StudentProfile"> | string
    dateOfBirth?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    profileUrl?: StringFilter<"StudentProfile"> | string
    year?: StringFilter<"StudentProfile"> | string
    branch?: StringFilter<"StudentProfile"> | string
    section?: StringFilter<"StudentProfile"> | string
    roomno?: StringFilter<"StudentProfile"> | string
    isPresentInCampus?: BoolFilter<"StudentProfile"> | boolean
    isApplicationPending?: BoolFilter<"StudentProfile"> | boolean
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
  }, "id" | "username">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherOccupation?: SortOrder
    motherOccupation?: SortOrder
    fatherEmail?: SortOrder
    motherEmail?: SortOrder
    fatherAddress?: SortOrder
    motherAddress?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    profileUrl?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    section?: SortOrder
    roomno?: SortOrder
    isPresentInCampus?: SortOrder
    isApplicationPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProfile"> | string
    username?: StringWithAggregatesFilter<"StudentProfile"> | string
    name?: StringWithAggregatesFilter<"StudentProfile"> | string
    email?: StringWithAggregatesFilter<"StudentProfile"> | string
    gender?: StringWithAggregatesFilter<"StudentProfile"> | string
    phone?: StringWithAggregatesFilter<"StudentProfile"> | string
    fatherName?: StringWithAggregatesFilter<"StudentProfile"> | string
    motherName?: StringWithAggregatesFilter<"StudentProfile"> | string
    fatherOccupation?: StringWithAggregatesFilter<"StudentProfile"> | string
    motherOccupation?: StringWithAggregatesFilter<"StudentProfile"> | string
    fatherEmail?: StringWithAggregatesFilter<"StudentProfile"> | string
    motherEmail?: StringWithAggregatesFilter<"StudentProfile"> | string
    fatherAddress?: StringWithAggregatesFilter<"StudentProfile"> | string
    motherAddress?: StringWithAggregatesFilter<"StudentProfile"> | string
    bloodGroup?: StringWithAggregatesFilter<"StudentProfile"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"StudentProfile"> | Date | string | null
    profileUrl?: StringWithAggregatesFilter<"StudentProfile"> | string
    year?: StringWithAggregatesFilter<"StudentProfile"> | string
    branch?: StringWithAggregatesFilter<"StudentProfile"> | string
    section?: StringWithAggregatesFilter<"StudentProfile"> | string
    roomno?: StringWithAggregatesFilter<"StudentProfile"> | string
    isPresentInCampus?: BoolWithAggregatesFilter<"StudentProfile"> | boolean
    isApplicationPending?: BoolWithAggregatesFilter<"StudentProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
  }

  export type FacultyProfileWhereInput = {
    AND?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    OR?: FacultyProfileWhereInput[]
    NOT?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    id?: StringFilter<"FacultyProfile"> | string
    username?: StringFilter<"FacultyProfile"> | string
    name?: StringFilter<"FacultyProfile"> | string
    email?: StringFilter<"FacultyProfile"> | string
    contact?: StringFilter<"FacultyProfile"> | string
    department?: StringFilter<"FacultyProfile"> | string
    designation?: StringFilter<"FacultyProfile"> | string
    role?: StringFilter<"FacultyProfile"> | string
    profileUrl?: StringFilter<"FacultyProfile"> | string
    createdAt?: DateTimeFilter<"FacultyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"FacultyProfile"> | Date | string
  }

  export type FacultyProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultyProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    OR?: FacultyProfileWhereInput[]
    NOT?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    name?: StringFilter<"FacultyProfile"> | string
    contact?: StringFilter<"FacultyProfile"> | string
    department?: StringFilter<"FacultyProfile"> | string
    designation?: StringFilter<"FacultyProfile"> | string
    role?: StringFilter<"FacultyProfile"> | string
    profileUrl?: StringFilter<"FacultyProfile"> | string
    createdAt?: DateTimeFilter<"FacultyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"FacultyProfile"> | Date | string
  }, "id" | "username" | "email">

  export type FacultyProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacultyProfileCountOrderByAggregateInput
    _max?: FacultyProfileMaxOrderByAggregateInput
    _min?: FacultyProfileMinOrderByAggregateInput
  }

  export type FacultyProfileScalarWhereWithAggregatesInput = {
    AND?: FacultyProfileScalarWhereWithAggregatesInput | FacultyProfileScalarWhereWithAggregatesInput[]
    OR?: FacultyProfileScalarWhereWithAggregatesInput[]
    NOT?: FacultyProfileScalarWhereWithAggregatesInput | FacultyProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacultyProfile"> | string
    username?: StringWithAggregatesFilter<"FacultyProfile"> | string
    name?: StringWithAggregatesFilter<"FacultyProfile"> | string
    email?: StringWithAggregatesFilter<"FacultyProfile"> | string
    contact?: StringWithAggregatesFilter<"FacultyProfile"> | string
    department?: StringWithAggregatesFilter<"FacultyProfile"> | string
    designation?: StringWithAggregatesFilter<"FacultyProfile"> | string
    role?: StringWithAggregatesFilter<"FacultyProfile"> | string
    profileUrl?: StringWithAggregatesFilter<"FacultyProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FacultyProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacultyProfile"> | Date | string
  }

  export type AdminProfileWhereInput = {
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    id?: StringFilter<"AdminProfile"> | string
    username?: StringFilter<"AdminProfile"> | string
    email?: StringFilter<"AdminProfile"> | string
    role?: StringFilter<"AdminProfile"> | string
    createdAt?: DateTimeFilter<"AdminProfile"> | Date | string
    updatedAt?: DateTimeFilter<"AdminProfile"> | Date | string
  }

  export type AdminProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    role?: StringFilter<"AdminProfile"> | string
    createdAt?: DateTimeFilter<"AdminProfile"> | Date | string
    updatedAt?: DateTimeFilter<"AdminProfile"> | Date | string
  }, "id" | "username" | "email">

  export type AdminProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminProfileCountOrderByAggregateInput
    _max?: AdminProfileMaxOrderByAggregateInput
    _min?: AdminProfileMinOrderByAggregateInput
  }

  export type AdminProfileScalarWhereWithAggregatesInput = {
    AND?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    OR?: AdminProfileScalarWhereWithAggregatesInput[]
    NOT?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminProfile"> | string
    username?: StringWithAggregatesFilter<"AdminProfile"> | string
    email?: StringWithAggregatesFilter<"AdminProfile"> | string
    role?: StringWithAggregatesFilter<"AdminProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminProfile"> | Date | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: StringFilter<"Banner"> | string
    title?: StringFilter<"Banner"> | string
    text?: StringFilter<"Banner"> | string
    imageUrl?: StringFilter<"Banner"> | string
    isPublished?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    title?: StringFilter<"Banner"> | string
    text?: StringFilter<"Banner"> | string
    imageUrl?: StringFilter<"Banner"> | string
    isPublished?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banner"> | string
    title?: StringWithAggregatesFilter<"Banner"> | string
    text?: StringWithAggregatesFilter<"Banner"> | string
    imageUrl?: StringWithAggregatesFilter<"Banner"> | string
    isPublished?: BoolWithAggregatesFilter<"Banner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type StudentProfileCreateInput = {
    id: string
    username: string
    name?: string
    email?: string
    gender?: string
    phone?: string
    fatherName?: string
    motherName?: string
    fatherOccupation?: string
    motherOccupation?: string
    fatherEmail?: string
    motherEmail?: string
    fatherAddress?: string
    motherAddress?: string
    bloodGroup?: string
    dateOfBirth?: Date | string | null
    profileUrl?: string
    year?: string
    branch?: string
    section?: string
    roomno?: string
    isPresentInCampus?: boolean
    isApplicationPending?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUncheckedCreateInput = {
    id: string
    username: string
    name?: string
    email?: string
    gender?: string
    phone?: string
    fatherName?: string
    motherName?: string
    fatherOccupation?: string
    motherOccupation?: string
    fatherEmail?: string
    motherEmail?: string
    fatherAddress?: string
    motherAddress?: string
    bloodGroup?: string
    dateOfBirth?: Date | string | null
    profileUrl?: string
    year?: string
    branch?: string
    section?: string
    roomno?: string
    isPresentInCampus?: boolean
    isApplicationPending?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: StringFieldUpdateOperationsInput | string
    motherOccupation?: StringFieldUpdateOperationsInput | string
    fatherEmail?: StringFieldUpdateOperationsInput | string
    motherEmail?: StringFieldUpdateOperationsInput | string
    fatherAddress?: StringFieldUpdateOperationsInput | string
    motherAddress?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileUrl?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    roomno?: StringFieldUpdateOperationsInput | string
    isPresentInCampus?: BoolFieldUpdateOperationsInput | boolean
    isApplicationPending?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: StringFieldUpdateOperationsInput | string
    motherOccupation?: StringFieldUpdateOperationsInput | string
    fatherEmail?: StringFieldUpdateOperationsInput | string
    motherEmail?: StringFieldUpdateOperationsInput | string
    fatherAddress?: StringFieldUpdateOperationsInput | string
    motherAddress?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileUrl?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    roomno?: StringFieldUpdateOperationsInput | string
    isPresentInCampus?: BoolFieldUpdateOperationsInput | boolean
    isApplicationPending?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateManyInput = {
    id: string
    username: string
    name?: string
    email?: string
    gender?: string
    phone?: string
    fatherName?: string
    motherName?: string
    fatherOccupation?: string
    motherOccupation?: string
    fatherEmail?: string
    motherEmail?: string
    fatherAddress?: string
    motherAddress?: string
    bloodGroup?: string
    dateOfBirth?: Date | string | null
    profileUrl?: string
    year?: string
    branch?: string
    section?: string
    roomno?: string
    isPresentInCampus?: boolean
    isApplicationPending?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: StringFieldUpdateOperationsInput | string
    motherOccupation?: StringFieldUpdateOperationsInput | string
    fatherEmail?: StringFieldUpdateOperationsInput | string
    motherEmail?: StringFieldUpdateOperationsInput | string
    fatherAddress?: StringFieldUpdateOperationsInput | string
    motherAddress?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileUrl?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    roomno?: StringFieldUpdateOperationsInput | string
    isPresentInCampus?: BoolFieldUpdateOperationsInput | boolean
    isApplicationPending?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: StringFieldUpdateOperationsInput | string
    motherOccupation?: StringFieldUpdateOperationsInput | string
    fatherEmail?: StringFieldUpdateOperationsInput | string
    motherEmail?: StringFieldUpdateOperationsInput | string
    fatherAddress?: StringFieldUpdateOperationsInput | string
    motherAddress?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileUrl?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    roomno?: StringFieldUpdateOperationsInput | string
    isPresentInCampus?: BoolFieldUpdateOperationsInput | boolean
    isApplicationPending?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyProfileCreateInput = {
    id: string
    username: string
    name: string
    email: string
    contact?: string
    department: string
    designation: string
    role?: string
    profileUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyProfileUncheckedCreateInput = {
    id: string
    username: string
    name: string
    email: string
    contact?: string
    department: string
    designation: string
    role?: string
    profileUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyProfileCreateManyInput = {
    id: string
    username: string
    name: string
    email: string
    contact?: string
    department: string
    designation: string
    role?: string
    profileUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminProfileCreateInput = {
    id: string
    username: string
    email?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminProfileUncheckedCreateInput = {
    id: string
    username: string
    email?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminProfileCreateManyInput = {
    id: string
    username: string
    email?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    title: string
    text: string
    imageUrl: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    title: string
    text: string
    imageUrl: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: string
    title: string
    text: string
    imageUrl: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherOccupation?: SortOrder
    motherOccupation?: SortOrder
    fatherEmail?: SortOrder
    motherEmail?: SortOrder
    fatherAddress?: SortOrder
    motherAddress?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    profileUrl?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    section?: SortOrder
    roomno?: SortOrder
    isPresentInCampus?: SortOrder
    isApplicationPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherOccupation?: SortOrder
    motherOccupation?: SortOrder
    fatherEmail?: SortOrder
    motherEmail?: SortOrder
    fatherAddress?: SortOrder
    motherAddress?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    profileUrl?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    section?: SortOrder
    roomno?: SortOrder
    isPresentInCampus?: SortOrder
    isApplicationPending?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherOccupation?: SortOrder
    motherOccupation?: SortOrder
    fatherEmail?: SortOrder
    motherEmail?: SortOrder
    fatherAddress?: SortOrder
    motherAddress?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    profileUrl?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    section?: SortOrder
    roomno?: SortOrder
    isPresentInCampus?: SortOrder
    isApplicationPending?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FacultyProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultyProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultyProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentProfileDefaultArgs instead
     */
    export type StudentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyProfileDefaultArgs instead
     */
    export type FacultyProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminProfileDefaultArgs instead
     */
    export type AdminProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BannerDefaultArgs instead
     */
    export type BannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BannerDefaultArgs<ExtArgs>

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