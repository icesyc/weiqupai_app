//
//  CDVBPush.h
//  cordova-plugin-bpush
//
//  Created by icesyc on 04/04/13
//
//

#import <Cordova/CDV.h>
#import "BPush.h"


@interface CDVBPush:CDVPlugin <BPushDelegate, UIAlertViewDelegate>

@property (nonatomic, strong) NSString *currentCallbackId;
@property (nonatomic, strong) NSString *appId;
@property (nonatomic, strong) NSString *userId;
@property (nonatomic, strong) NSString *channelId;
@property (nonatomic, strong) NSString *deviceToken;
@property (nonatomic, strong) NSDictionary *userInfo;

- (void) bindChannel:(CDVInvokedUrlCommand *)command;
- (void) unbindChannel:(CDVInvokedUrlCommand *)command;
- (void) setup:(NSDictionary *)launchOptions;
- (void) handleNotification:(NSDictionary *)userInfo;
- (void) registerDeviceToken:(NSData *)deviceToken;
- (void) handleNotificationClick:(NSString *)url;
@end