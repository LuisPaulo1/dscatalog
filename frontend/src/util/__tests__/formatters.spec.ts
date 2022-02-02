import { formatPrice } from '../formatters';

describe('formatPrice for positive numbers', () => {

    test('should format number pt-BR when given 10.1', () => {
      // ARRANGE
      const value = 10.1;
      // ACT
      const result = formatPrice(value);
      // ASSERT
      expect(result).toEqual('10,10');
    });

    test('should format number pt-BR when given 0.1', () => {
        // ARRANGE
        const value = 0.1;
        // ACT
        const result = formatPrice(value);
        // ASSERT
        expect(result).toEqual('0,10');
    });

});

describe('formatPrice for non-positive numbers', () => {

    test('should format number pt-BR when given 0', () => {
      // ARRANGE
      const value = 0;
      // ACT
      const result = formatPrice(value);
      // ASSERT
      expect(result).toEqual('0,00');
    });

    test('should format number pt-BR when given -5.1', () => {
        // ARRANGE
        const value = -5.1;
        // ACT
        const result = formatPrice(value);
        // ASSERT
        expect(result).toEqual('-5,10');
    });

});