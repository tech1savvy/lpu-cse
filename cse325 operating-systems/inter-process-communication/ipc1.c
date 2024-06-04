// simple duplex - sender

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main(){
	FILE *rd;
	char buffer[50];
	sprintf(buffer, "name frist");
	// wc -c :: is the process which count the number
	of character
	rd=popen("wc -c", "w");
	// write the buffer to the pipe
	fwrite(buffer, sizeof(char), strlen(buffer), rd); 
	pclose(rd);
}