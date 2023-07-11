import connect from './api.ts';
import { assertExists } from 'https://deno.land/std/testing/asserts.ts';

Deno.test({
  name: 'connect', 
  fn() {
    assertExists(connect);
  }
});
