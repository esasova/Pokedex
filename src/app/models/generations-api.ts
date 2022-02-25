export class GenerationsApi {
  count!: number;
  next!: null;
  previous!: null;
  results!: [{ name: String; url: String }];
}
