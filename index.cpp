#include<windows.h>
#include<iostream>
#include<string>
#pragma comment(lib,"shell32.lib")

using namespace std;

void main(){
	ShellExecute(NULL, "open", "https://o-atsu.github.io/Okamoto_Portfolio/", NULL, NULL, SW_SHOWNORMAL);
}
