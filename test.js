import test from 'ava';
import x from './';

test('Buzzword test',t => {
    t.truthy(x.buzzword());
});

test('Catch phrase test',t => {
    t.truthy(x.catchPhrase());
});
