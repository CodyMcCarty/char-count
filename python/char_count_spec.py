import unittest

# begin test for char_count
from char_count import char_count
class CharCountTestCase(unittest.TestCase):
  "Test for char_count"

  def test_returns_an_object(self):
    """When you call char_count(), you should get an object back"""
    self.assertEqual(type(char_count('str')), dict)

  def test_checks_aaabbc(self):
    """When you call char_count('aaabbc'), you should get the correct object back"""
    self.assertEqual(char_count('aaabbc'), {
      "a": 3,
      "b": 2,
      "c": 1
      })

  def test_checks_an_apple_a_day_will_keep_the_doctor_away(self):
    """When you call char_count('an apple a day will keep the doctor away'), you should get the correct object back"""
    self.assertEqual(char_count('an apple a day will keep the doctor away'), {
      "a": 6,
      "e": 4,
      "p": 3,
      "l": 3,
      "y": 2,
      "w": 2,
      "t": 2,
      "d": 2,
      "h": 1,
      "n": 1,
      "c": 1,
      "o": 2,
      "i": 1,
      "k": 1,
      "r": 1
    })

if __name__ == '__main__':
  unittest.main()

# end test for char_count