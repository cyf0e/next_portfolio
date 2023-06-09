import { Parser } from "../parser";
import {
  Precedance,
  ReturnStatement,
  VariableAssignmentStatement,
} from "./parserUtils";
import { tokens, Token } from "../token";
import {
  Expression,
  LetStatement,
  IfStatement,
  ElseStatement,
  ElifStatement,
  FunctionStatement,
  Statement,
  StatementBlock,
} from "./parserUtils";
function expectedSemiColonError(token: Token | undefined) {
  if (!token) return;
  if (token.value !== tokens.SEMICOLON) throw new Error("Expected semicolon.");
}
export function parseLetStatement(this: Parser) {
  const ident = this.consumeAfterToken();
  this.incrementToken(); //skip =
  const ls = new LetStatement(ident, this.parseExpression(Precedance.LOWEST));
  expectedSemiColonError(this.getToken());
  this.incrementToken();
  return ls;
}
export function parseAssignmentStatement(this: Parser) {
  const ident = this.consumeToken();
  this.incrementToken(); //skip =
  const value = this.parseExpression();
  if (this.getToken()?.value == tokens.SEMICOLON) this.incrementToken();
  return new VariableAssignmentStatement(ident, value);
}
export function parseStatementBlock(this: Parser) {
  this.incrementToken(); //skip { token
  const statementBlock: Array<Statement | Expression> = [];
  //TODO: This doesnt work with nested statement blocks, fix later
  while (this.getToken()?.value && this.getToken()!.value != "}") {
    statementBlock.push(this.parseStatement());
  }
  this.incrementToken(); //skip } token
  return new StatementBlock(statementBlock);
}

export function parseIfStatement(this: Parser) {
  const isIf = this.getToken()!.value == tokens.IF ? true : false;
  this.incrementToken(); //skip IF token
  this.incrementToken(); //skip (
  const condition = this.parseExpression(Precedance.LOWEST);
  this.incrementToken(); // skip ) token
  const statementBlock: StatementBlock = parseStatementBlock.bind(this)();
  const ifSt = isIf
    ? new IfStatement(condition, statementBlock)
    : new ElifStatement(condition, statementBlock);
  return ifSt;
}
export function parseElseStatement(this: Parser) {
  this.incrementToken(); // skip else token
  const statementBlock: StatementBlock = parseStatementBlock.bind(this)();
  return new ElseStatement(statementBlock);
}

export function parseArgumentList(this: Parser) {
  this.incrementToken(); //skip ( token
  const argExpressions: Expression[] = [];
  let curr: Expression | undefined = undefined;
  while (this.getToken()!.value != ")") {
    if (this.getToken()!.value == tokens.COMMA) {
      curr && argExpressions.push(curr);
      curr = undefined;
      this.incrementToken();
    }
    curr = this.parseExpression();
  }
  curr && argExpressions.push(curr);
  this.incrementToken(); // skip ) token
  return argExpressions;
}
export function parseFunctionStatement(this: Parser) {
  this.incrementToken(); //skip function token
  const identifier = this.consumeToken();
  const args: Expression[] = parseArgumentList.bind(this)();
  const statementBlock: StatementBlock = parseStatementBlock.bind(this)();
  return new FunctionStatement(identifier, args, statementBlock);
}
export function parseReturnStatement(this: Parser) {
  this.incrementToken(); // skip return token
  const exp = this.parseExpression(Precedance.LOWEST);
  expectedSemiColonError(this.getToken());
  if (this.getToken()?.value == ";") this.incrementToken(); //skip ;
  return new ReturnStatement(exp);
}
