using System;
using System.Text;
using System.Collections.Generic;
using System.Numerics;

class SpecialValue
{
    private static string[] allDigits;
    static List<int> bigDigits = new List<int>(16);

    static void Main()
    {
        allDigits = MakeAllDigits();

        string input = Console.ReadLine();

        GetDigitsFromInput(input);

        BigInteger result = ConvertToDecimal(bigDigits.ToArray());

        Console.WriteLine(result);
    }
    static BigInteger ConvertToDecimal(int[] number)
    {
        BigInteger result = 0;

        for (int i = 0, power = number.Length - 1; i < number.Length; power--, i++)
        {
            result += number[i] * Power(power);
        }

        return result;
    }

    static void GetDigitsFromInput(string input)
    {
        string digit168 = "";

        for (int i = 0; i < input.Length; i++)
        {
            char ch = input[i];
            digit168 += ch;

            if (char.IsUpper(ch))
            {
                ConvertStringToNumber(digit168);
                digit168 = "";
            }
        }
    }

    static string[] MakeAllDigits()
    {
        string[] allDigits = new string[168];

        int index = 0;
        for (char letter = 'A'; letter <= 'Z'; index++, letter++)
        {
            allDigits[index] = letter.ToString();
        }

        for (int mainLetter = 0; mainLetter < 6; mainLetter++)
        {
            char ch = (char)(mainLetter + 'a');

            for (char letter = 'A'; letter <= 'Z'; index++, letter++)
            {
                string str = ch.ToString() + letter.ToString();
                allDigits[index] = str;
                if (index == 167)
                {
                    break;
                }
            }
        }

        return allDigits;
    }

    static void ConvertStringToNumber(string digit)
    {
        for (int i = 0; i < allDigits.Length; i++)
        {
            if (allDigits[i] == digit)
            {
                bigDigits.Add(i);
                break;
            }
        }
    }

    static BigInteger Power(int power)
    {
        BigInteger result = 1;

        for (int i = 0; i < power; i++)
        {
            result *= 168;
        }

        return result;
    }
}