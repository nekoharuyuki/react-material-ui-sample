import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  AccountCircle as AccountCircleIcon,
  Assignment as AssignmentIcon,
  Photo as PhotoIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  AdminPanelSettings as AdminPanelSettingsIcon
} from "@mui/icons-material";

import {
  NavigationItem,
  NavigationSingleItem,
  NavigationGroupItem
} from "../NavigationList";

const createNavigationSingleItem = (item: NavigationSingleItem) => item;
const createNavigationGroupItem = (item: NavigationGroupItem) => item;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  createNavigationSingleItem({
    icon: HomeIcon,
    title: "管理画面トップ",
    href: "/"
  }),
  createNavigationSingleItem({
    icon: DashboardIcon,
    title: "ダッシュボード",
    href: "/Dashboard"
  }),
  createNavigationGroupItem({
    icon: AccountCircleIcon,
    title: "ユーザー管理",
    subs: [
      createNavigationSingleItem({
        title: "ユーザー情報 一覧",
        href: "/UserManagement"
      }),
      createNavigationSingleItem({
        title: "ゲーム内通貨設定",
        href: "/images"
      }),
      createNavigationSingleItem({
        title: "お知らせ・ギフト設定",
        href: "/images"
      })
    ]
  }),
  createNavigationGroupItem({
    icon: AssignmentIcon,
    title: "マスタ管理",
    subs: [
      createNavigationSingleItem({
        title: "クエスト",
        href: "/UserManagement"
      }),
      createNavigationSingleItem({
        title: "ショップ",
        href: "/UserManagement"
      }),
      createNavigationSingleItem({
        title: "ガチャ",
        href: "/UserManagement"
      }),
      createNavigationSingleItem({
        title: "キャラクター",
        href: "/UserManagement"
      }),
      createNavigationSingleItem({
        title: "アイテム",
        href: "/UserManagement"
      })
    ]
  }),
  createNavigationGroupItem({
    icon: PhotoIcon,
    title: "画像管理",
    subs: [
      createNavigationSingleItem({
        title: "画像アップロード",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "画像一覧",
        href: "/images"
      })
    ]
  }),
  createNavigationGroupItem({
    icon: BarChartIcon,
    title: "データ分析",
    subs: [
      createNavigationSingleItem({
        title: "ユーザー分析",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "課金分析",
        href: "/images"
      }),
      createNavigationGroupItem({
        title: "コンテンツ分析",
        subs: [
          createNavigationSingleItem({
            title: "チュートリアル",
            href: "/settings/notification-desktop"
          }),
          createNavigationSingleItem({
            title: "クエスト",
            href: "/settings/notification-email"
          }),
          createNavigationSingleItem({
            title: "キャラクター",
            href: "/settings/notification-desktop"
          }),
        ]
      })
    ]
  }),
  createNavigationGroupItem({
    icon: SettingsIcon,
    title: "設定",
    subs: [
      createNavigationSingleItem({
        title: "プラン",
        href: "/Account"
      }),
      createNavigationGroupItem({
        title: "アカウント",
        subs: [
          createNavigationSingleItem({
            title: "メアド変更",
            href: "/settings"
          }),
          createNavigationSingleItem({
            title: "パスワード変更",
            href: "/settings"
          })
        ]
      }),
      createNavigationGroupItem({
        title: "通知",
        subs: [
          createNavigationSingleItem({
            title: "デスクトップ",
            href: "/settings/notification-desktop"
          }),
          createNavigationSingleItem({
            title: "メール",
            href: "/settings/notification-email"
          })
        ]
      }),
    ]
  }),
  createNavigationGroupItem({
    icon: AdminPanelSettingsIcon,
    title: "管理者設定",
    subs: [
      createNavigationSingleItem({
        title: "アカウント管理",
        href: "/Admin"
      }),
      createNavigationSingleItem({
        title: "お知らせ設定",
        href: "/settings/notification-email"
      })
    ]
  })
];
