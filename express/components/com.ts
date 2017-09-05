"use strict";

import { Component, ILogger, IConfigReader } from 'merapi';
import { Request, Response } from "express";
export default class Com extends Component {
  constructor() { super(); }
  start() { }
  get(req: Request, res: Response) { res.send({"success":"Hore"}); }
}