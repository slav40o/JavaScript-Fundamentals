using System;
using System.Text;
using System.Numerics;
class GagNumbers
{
    private static string[] gagDigits = { "-!", "**", "!!!", "&&", "&-", "!-", "*!!!", "&*!", "!!**!-" };
    static void Main()
    {
        string input = Console.ReadLine();
        BigInteger nonaryNum = GetDigits(input);
        BigInteger decimalNum = NonaryToDecimal(nonaryNum);
        Console.WriteLine(decimalNum);
    }

    static BigInteger GetDigits(string gagNumber)
    {
        StringBuilder nonaryDigits = new StringBuilder();
        StringBuilder digit = new StringBuilder();

        for (int i = 0; i < gagNumber.Length; i++)
        {
            digit.Append(gagNumber[i]);
            bool chechIfdigit = IsDigit(digit.ToString());

            if (chechIfdigit)
            {
                nonaryDigits.Append(GetNonaryDigit(digit.ToString()));
                digit.Clear();
            }
        }

        return BigInteger.Parse(nonaryDigits.ToString());
    }
    static bool IsDigit(string digit)
    {

        for (int i = 0; i < gagDigits.Length; i++)
        {
            if (digit == gagDigits[i])
            {
                return true;
            }
        }

        return false;
    }
    static BigInteger NonaryToDecimal(BigInteger num)
    {
        BigInteger decimalNum = 0;
        BigInteger nonaryNum = num;
        int position = 0;

        while (nonaryNum != 0)
        {
            BigInteger digit = nonaryNum % 10;
            decimalNum += digit * PowerOfNine(position);
            position++;
            nonaryNum /= 10;
        }

        return decimalNum;
    }

    static string GetNonaryDigit(string digit)
    {

        for (int i = 0; i < gagDigits.Length; i++)
        {
            if (digit == gagDigits[i])
            {
                return i.ToString();
            }
        }
        return "";
    }

    static BigInteger PowerOfNine(int power)
    {
        BigInteger result = 1;

        for (int i = 0; i < power; i++)
        {
            result *= 9;
        }

        return result;
    }
}