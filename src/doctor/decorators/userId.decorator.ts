import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log(ctx.switchToHttp().getRequest());
    return ctx.switchToHttp().getRequest()?.user.id;
  },
);
