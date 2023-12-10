#include <iostream>
#include <limits> // Include the <limits> header for input validation
using namespace std;

class DivisorCalculator {
public:
    DivisorCalculator() {
        cout << "Welcome to the Divisor Calculator!" << endl;
    }

    void calculateAndPrintDivisors(int number) {
        cout << "Divisors of " << number << " are:" << endl;
        for (int i = number; i >= 1; i--) {
            if (number % i == 0) {
                cout << i << endl;
            }
        }
    }
};

class UserInterface {
public:
    UserInterface() {
        cout << "This program helps you find the divisors of a positive integer." << endl;
    }

    void run() {
        char repeat;
        do {
            int number;
            cout << "Enter a positive integer: ";
            cin >> number;

            if (cin.fail() || number <= 0) {
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
                cout << "Invalid input. Please enter a positive integer." << endl;
                continue;
            }

            DivisorCalculator calculator;
            calculator.calculateAndPrintDivisors(number);

            cout << "Do you want to calculate divisors for another number? (y/n): ";
            cin >> repeat;
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
        } while (repeat == 'y' || repeat == 'Y');
    }
};

int main() {
    UserInterface ui;
    ui.run();
    cout << "Goodbye!" << endl;
    return 0;
}
