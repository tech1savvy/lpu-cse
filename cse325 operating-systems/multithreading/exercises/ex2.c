#include<stdio.h>
#include<unistd.h>
#include<pthread.h>
#include<string.h>

char str[100];
int length=0;

void *lengthstr(){
	length=strlen(str);
	pthread_exit(NULL);
}


int main(){
	pthread_t thread;
	printf("* Enter the String: ");
	scanf("%[^\n]s", str) == 1;

	pthread_create(&thread, NULL, lengthstr, NULL);
	pthread_join(thread, NULL);
	printf("length: %d\n", length);
	return 0;
}
