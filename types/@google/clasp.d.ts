declare module "@google/clasp/src/commands/deploy" {
  interface CommandOption {
    readonly versionNumber?: number;
    readonly description?: string;
    readonly deploymentId?: string;
  }

  const value: (option: CommandOption) => Promise<void>
  export default value;
}
declare module "@google/clasp/src/commands/login" {
  interface CommandOption {
    readonly localhost?: boolean;
    readonly creds?: string;
    readonly status?: boolean;
  }

  const value: (option: CommandOption) => Promise<void>
  export default value;
}
declare module "@google/clasp/src/commands/push" {
  interface CommandOption {
    readonly watch?: boolean;
    readonly force?: boolean;
  }

  const value: (option: CommandOption) => Promise<void>
  export default value;
}
