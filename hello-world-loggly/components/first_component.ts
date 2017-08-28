import { Component, ILogger, IConfigReader } from 'merapi';

export default class FirstComponent extends Component {
  constructor(
    private logger: ILogger,
    private config: IConfigReader) {
    super();
    this.logger.info("Starting app...");
  }
  start(args: string[]) {
    this.initialize();
    this.logger.debug(`${this.config('greeting')} ${args[2]}`);
  }
}