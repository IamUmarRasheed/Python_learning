#include <iostream>
#include <limits> 
using namespace std;

class IslamicInfo {
public:
    void QuranInfo() {
        cout << "Quran Detail:" << endl;
        cout << "Total Parah: 30" << endl;
        cout << "Surah: 114" << endl;
        cout << "Total Ayat: 6666" << endl;
        cout << "Makhi Surah: 86" << endl;
        cout << "Madani Surah: 28" << endl;
    }

    void displayList() {
        cout << "Paraz Rakat in each prayer are: 2 ,4 ,4 ,3 ,4" << endl;
    }

    void sumFivePrayerFarazRakat() {
        int faraz_rakats[] = {2, 4, 4, 3, 4};
        int sum = 0;

        for (int i = 0; i < 5; i++) {
            sum += faraz_rakats[i];
        }

        cout << "Total Faraz rakat in five prayers are: " << sum << endl;
    }

    void showChoices() {
        int choice;
        do {
            cout << "MENU" << endl;
            cout << "1: Quran Information " << endl;
            cout << "2: Display List" << endl;
            cout << "3: Sum all five prayers Farz rakat" << endl;
            cout << "4: Exit" << endl;
            cout << "Enter your choice: ";
            cin >> choice;

            
            if (cin.fail()) {
                cin.clear(); 
                cin.ignore(numeric_limits<streamsize>::max(), '\n'); 
                cout << "Invalid input. Please enter a valid option." << endl;
                continue;
            }

            switch (choice) {
                case 1:
                    QuranInfo();
                    break;
                case 2:
                    displayList();
                    break;
                case 3:
                    sumFivePrayerFarazRakat();
                    break;
                case 4:
                    cout << "Exiting the program." << endl;
                    break;
                default:
                    cout << "Invalid choice. Please select a valid option." << endl;
            }
        } while (choice != 4);
    }
};

int main() {
    IslamicInfo info;
    info.showChoices();
    return 0;
}
