// simple duplex - receiver

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main(){
	FILE *rd;
	char buffer[50];
	// pipe opened in reading mode
	rd=popen("ls", "r");
	// will read only 5 char
	fread(buffer, 1, 10, rd) == 1; 
	printf("%s\n",buffer);
	pclose(rd);
}